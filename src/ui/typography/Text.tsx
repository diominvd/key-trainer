import React from 'react';
// Types;
import { AlignType, ColorType, WeightType } from '@config/types.ts';
// Styles;
import '@styles/components/Text.scss';


interface TextInterface {
   align?: AlignType;
   color?: ColorType;
   weight?: WeightType;
   underline?: boolean;
   children: React.ReactNode;
}

export const Text: React.FC<TextInterface> = ({ align='left', color='default', weight=500, underline=false, children }): JSX.Element => {
   return (
      <span className={`text align-${align} color-${color} weight-${weight} underline-${underline}`}>{ children }</span>
   )
}
