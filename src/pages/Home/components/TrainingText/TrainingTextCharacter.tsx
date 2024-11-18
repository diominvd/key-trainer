import React from 'react';
// Types;
import { CursorType } from '@config/types';
// Styles;
import '@styles/components/TrainingTextCharacter.scss';


interface TrainingTextCharacterInterface {
   color?: 'neutral' | 'correct' | 'incorrect';
   underline?: boolean;
   cursor?: CursorType | false;
   children: React.ReactNode;
}

export const TrainingTextCharacter: React.FC<TrainingTextCharacterInterface> = ({ color='neutral', underline=false, cursor=false, children }): JSX.Element => {
   return (
      <span className={`training-text-character color-${color} underline-${underline} cursor-${cursor}`}>
         { children }
      </span>
   )
}