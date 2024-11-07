import React, { createContext, useContext, useState, useEffect } from 'react';
// Utilities;
import { generateRandomText } from '@utils/generateRandomText.ts';
// Config;
import words from '@config/words.ts';
import { LayoutLanguageType } from '@config/types';


interface TrainingContextInterface {
   layoutLanguage: string;
   trainingTimerValue: number;
   trainingText: string;
   trainingTextLength: number;
   trainingUserInput: string;
   typingSpeed: number;
   typingAccuracy: number;
   typingMisprints: number;
}

interface TrainingProviderInterface {
   children: React.ReactNode;
}

const TrainingContext = createContext<TrainingContextInterface | undefined>(undefined)

export const TrainingProvider: React.FC<TrainingProviderInterface> = ({ children }): JSX.Element => {
   const [trainingStatus, setTrainingStatus] = useState<boolean>(false);
   const [layoutLanguage, setLayoutLanguage] = useState<LayoutLanguageType>('en');
   const [trainingStartTime, setTrainingStartTime] = useState<number>(0);
   const [trainingTimerValue, setTrainingTimerValue] = useState<number>(0);
   const [trainingText, setTrainingText] = useState<string>('');
   const [trainingTextLength, setTrainingTextLength] = useState<number>(30);
   const [trainingUserInput, setTrainingUserInput] = useState<string>('');
   const [trainingInputedCharsNumber, setTrainingInputedCharsNumber] = useState<number>(0);
   const [trainingCorrectInputedCharsNumber, setTrainingCorrectInputedCharsNumber] = useState<number>(0);
   const [typingSpeed, setTypingSpeed] = useState<number>(0);
   const [typingAccuracy, setTypingAccuracy] = useState<number>(0);
   const [typingMisprints, setTypingMisprints] = useState<number>(0);

   const changeLayoutLanguage = () => {
      setLayoutLanguage(prevLayout => (prevLayout === 'en' ? 'ru' : 'en'));
   }

   const startTraining = () => {
      setTrainingStatus(true);
      setTrainingStartTime(Date.now());
   }

   const stopTraining = () => {
      setTrainingStatus(false);
      setTrainingStartTime(0);
      setTrainingTimerValue(0);
      setTrainingUserInput('');
      setTrainingInputedCharsNumber(0);
      setTrainingCorrectInputedCharsNumber(0);
      setTypingSpeed(0);
      setTypingAccuracy(0);
      setTypingMisprints(0);
   }

   const checkTrainingUserInputCompleteness = () => {
      if (trainingUserInput.length >= trainingText.length) {
         setTrainingStatus(false);
      }
   }

   const updateTrainingTimerValue = () => {
      setTrainingTimerValue((Date.now() - trainingStartTime) / 1000);
   }

   const generateNewTrainingText = () => {
      const newTrainingText: string = generateRandomText(layoutLanguage, trainingTextLength); 
      setTrainingText(newTrainingText);
   }

   const changeTrainingTextLengthWithScroll = (e: WheelEvent) => {
      if (e.deltaY > 0) {
         if (trainingTextLength > 1) {
            setTrainingTextLength(prev => prev - 1);
         }
      } else {
         if (trainingText.split(' ').length < words[layoutLanguage].length) {
            setTrainingTextLength(prev => prev + 1);
         }
      }
   }

   const addCharToTrainingUserInput = (newInputedChar: string) => {
      setTrainingUserInput(prev => prev + newInputedChar);
   }

   const removeCharFromTrainingUserInput = () => {
      setTrainingUserInput(trainingUserInput.slice(0, -1));
   }

   const updateTrainingInputedCharsNumber = () => {
      setTrainingInputedCharsNumber(prev => prev + 1);
   }

   const updateTrainingCorrectInputedCharsNumber = () => {
      setTrainingCorrectInputedCharsNumber(prev => prev + 1);
   }

   const updateTypingSpeed = () => {
      const trainingDurationTimeInMinutes: number = (Date.now() - trainingStartTime) / 60000;
      const currentTypingSpeed: number = Number(Math.round(trainingInputedCharsNumber / trainingDurationTimeInMinutes).toFixed(0));
      setTypingSpeed(currentTypingSpeed);
   }

   const updateTypingAccuracy = () => {
      const currentTypingAccuracy: number = Number((((trainingCorrectInputedCharsNumber - typingMisprints) / trainingInputedCharsNumber) * 100).toFixed(0));
      
      if (isNaN(currentTypingAccuracy)) {
         setTypingAccuracy(0);
      } else if (currentTypingAccuracy < 0) {
         setTypingAccuracy(0);
      } else {
         setTypingAccuracy(currentTypingAccuracy);
      }
   }

   const updateTypingMisprints = () => {
      setTypingMisprints(prev => prev + 1);
   }

   /* Handlers for keyboard events */

   const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.length === 1) {
         if (!trainingStatus && (trainingUserInput.length === 0)) {
            startTraining(); // Change training status once if it not started; 
         }
         // Check completeness of user training input before process pressed key;
         if (trainingUserInput.length < trainingText.length) {
            processPressedSingleKey(e);
         }
      } else {
         try {
            specialKeysHandlers[e.key]();
         } catch (error) {
            console.log('KeyError: Unknown pressed key');
         }
      }
   }

   const processPressedSingleKey = (e: KeyboardEvent) => {
      const notFixedTrainingUserInput: string = trainingUserInput + e.key;

      // Check correct of pressed key;
      const pressedKeyIsCorrect: boolean = checkCorrectOfPressedSingleKey(notFixedTrainingUserInput, notFixedTrainingUserInput.length - 1);
      if (pressedKeyIsCorrect) {
         updateTrainingCorrectInputedCharsNumber();
      } else {
         updateTypingMisprints();
      }

      updateTrainingInputedCharsNumber();
      addCharToTrainingUserInput(e.key);
   }

   const specialKeysHandlers: Record<string, () => void> = {
      Backspace: () => {
         if (trainingUserInput.length > 0 && trainingUserInput.length < trainingText.length) {
            removeCharFromTrainingUserInput();
         }
      },
      Control: () => {
         changeLayoutLanguage();
      },
      Enter: () => {
         stopTraining();
         generateNewTrainingText();
      }
   }

   const checkCorrectOfPressedSingleKey = (notFixedInput: string, currentCharIndex: number) => {
      return currentCharIndex < trainingText.length && notFixedInput[currentCharIndex] === trainingText[currentCharIndex];
   }

   /*
      This effect causes the component to be redrawn when changing the language and length of the text, simultaneously bringing all states to their initial values;
   */ 
   useEffect(() => {
      stopTraining();
      generateNewTrainingText();
   }, [layoutLanguage, trainingTextLength])

   /*
      This effect causes the component to be redrawn when a key is pressed, the mouse wheel is scrolled, and interval calculations are triggered (At the same time, all states are not brought back to their original values);
   */
   useEffect(() => {
      window.addEventListener('keydown', handleKeyPress);
      window.addEventListener('wheel', changeTrainingTextLengthWithScroll);

      const trainingCalculateIntervalId = setInterval(() => {
         if (trainingStatus) {
            checkTrainingUserInputCompleteness();
            updateTrainingTimerValue();
            updateTypingSpeed();
            updateTypingAccuracy();
         }
      }, 50)

      return () => {
         window.removeEventListener('keydown', handleKeyPress);
         window.removeEventListener('wheel', changeTrainingTextLengthWithScroll);
         clearInterval(trainingCalculateIntervalId);
      }
   }, [trainingUserInput, trainingTextLength])

   return (
      <TrainingContext.Provider value={{ layoutLanguage, trainingTimerValue, trainingText, trainingTextLength, trainingUserInput, typingSpeed, typingAccuracy, typingMisprints }}>
         { children }
      </TrainingContext.Provider>
   )
}

// Custom hook for use TrainingProvider;
export const useTrainingProvider = (): TrainingContextInterface => {
   const context = useContext(TrainingContext);
   if (!context) {
      throw new Error('useData must not be used within an TrainingProvider')
   }
   return context;
}