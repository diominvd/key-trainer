import React from 'react';
// Providers;
import { useTrainingProvider } from '@providers/TrainingProvider.tsx';
// Components;
import { TrainingTextCharacter } from './TrainingTextCharacter.tsx';
// Styles;
import '@styles/components/TrainingText.scss';


export const TrainingText: React.FC = (): JSX.Element => {
   const { trainingText, trainingUserInput } = useTrainingProvider();
   const cursorType = 'block';

   const trainingUserTypedCharsList = trainingUserInput.split('');
   const remainsOfTrainingTextCharsList = trainingText.slice(trainingUserTypedCharsList.length, trainingText.length).split('');

   const typedCharsComponentsList: React.ReactNode[] = trainingUserTypedCharsList.map((typedChar, typedCharIndex) => {
         const typedCharIsCorrect = (trainingText[typedCharIndex] === typedChar) ? true : false;
         const typedCharIsSpace = (typedChar === ' ') ? true : false;
         const typedCharMustBeSpace = (trainingText[typedCharIndex] === ' ') ? true : false;
         return (
            <TrainingTextCharacter 
               key={typedCharIndex} 
               color={typedCharIsCorrect ? 'correct' : 'incorrect'} 
               underline={typedCharMustBeSpace && !typedCharIsCorrect} 
               cursor={(typedCharIndex === trainingText.length - 1) ? false : (typedCharIndex === trainingUserInput.length - 1) && cursorType}
            >
               {
                  typedCharMustBeSpace ? (
                     typedChar
                  ) : (
                     typedCharIsCorrect ? 
                        (
                           typedCharIsSpace? 
                              trainingText[typedCharIndex] :
                              typedChar
                        ) : trainingText[typedCharIndex]
                  )
               }
            </TrainingTextCharacter>
         )
      } 
   )

   const notTypedCharsComponentsList: React.ReactNode[] = remainsOfTrainingTextCharsList.map((notTypedChar, notTypedCharIndex) => (
      <TrainingTextCharacter key={notTypedCharIndex} color='neutral'>{ notTypedChar }</TrainingTextCharacter>
   ))

   return (
      <div className='training-text'>
         { typedCharsComponentsList }
         { notTypedCharsComponentsList }
      </div>
   )
}