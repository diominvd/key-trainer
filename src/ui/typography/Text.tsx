import React from 'react';
// Types;
import { AlignType, ColorType, CursorType, WeightType } from '@config/types.ts';
// Styles;
import '@styles/components/Text.scss';


interface TextInterface {
   align?: AlignType;
   color?: ColorType;
   weight?: WeightType;
   underline?: boolean;
   cursor?: CursorType | false;
   children: React.ReactNode;
}

export const Text: React.FC<TextInterface> = ({ align='left', color='main', weight=500, underline=false, cursor=false, children }): JSX.Element => {
   return (
      <span className={`text align-${align} color-${color} weight-${weight} underline-${underline} cursor-${cursor}`}>{ children }</span>
   )
}
