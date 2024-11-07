import React, { useEffect, useState } from 'react';
// Providers;
import { useTrainingProvider } from '@providers/TrainingProvider';
// Styles;
import '@styles/components/KeyboardKey.scss';


interface KeyboardKeyInterface {
   char: string;
   width?: number;
}

export const KeyboardKey: React.FC<KeyboardKeyInterface> = ({ char, width }): JSX.Element => {
   const [correctStatus, setCorrectStatus] = useState<boolean | null>(null);
   const { layoutLanguage, trainingText, trainingUserInput } = useTrainingProvider();

   const highlightKeyboardKey = (e: KeyboardEvent) => {
      if (e.key === char) {
         e.key === trainingText[trainingUserInput.length] ? setCorrectStatus(true) : setCorrectStatus(false);

         setTimeout(() => {
            setCorrectStatus(null);
         }, 100)
      }
   }

   useEffect(() => {
      window.addEventListener('keydown', highlightKeyboardKey);

      return () => {
         window.removeEventListener('keydown', highlightKeyboardKey);
      }
   }, [layoutLanguage, trainingUserInput])

   return (
      <div className={`keyboard-key status-${correctStatus}`} style={{width: `${width}px`}}>
         <span>{ char.toUpperCase() }</span>
      </div>
   )
}