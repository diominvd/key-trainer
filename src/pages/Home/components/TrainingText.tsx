import React from 'react';
// Providers;
import { useTrainingProvider } from '@providers/TrainingProvider';
// Components;
import { Text } from '@ui/typography/Text';
// Styles;
import '@styles/components/TrainingText.scss';


export const TrainingText: React.FC = (): JSX.Element => {
   const { trainingText, trainingUserInput } = useTrainingProvider();


   const trainingUserTypedCharsList = trainingUserInput.split('');
   const remainsOfTrainingTextCharsList = trainingText.slice(trainingUserTypedCharsList.length, trainingText.length).split('');

   const typedCharsComponentsList: React.ReactNode[] = trainingUserTypedCharsList.map((typedChar, typedCharIndex) => {
         const typedCharIsCorrect = (trainingText[typedCharIndex] === typedChar) ? true : false;
         const typedCharIsSpace = (typedChar === ' ') ? true : false;
         const typedCharMustBeSpace = (trainingText[typedCharIndex] === ' ') ? true : false;
         return (
            <Text key={typedCharIndex} color={typedCharIsCorrect ? 'primary' : 'primary-dark'} underline={typedCharMustBeSpace && !typedCharIsCorrect}>
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
            </Text>
         )
      } 
   )

   const notTypedCharsComponentsList: React.ReactNode[] = remainsOfTrainingTextCharsList.map((notTypedChar, notTypedCharIndex) => (
      <Text key={notTypedCharIndex} color='gray'>{ notTypedChar }</Text>
   ))

   return (
      <div className='training-text'>
         { typedCharsComponentsList }
         { notTypedCharsComponentsList }
      </div>
   )
}