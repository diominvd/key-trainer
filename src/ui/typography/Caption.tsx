import React from 'react';
// Types;
import { AlignType, ColorType, WeightType } from '@config/types.ts';
// Styles;
import '@styles/components/Caption.scss';


interface CaptionInterface {
   align?: AlignType;
   color?: ColorType;
   weight?: WeightType;
   children: React.ReactNode;
}

export const Caption: React.FC<CaptionInterface> = ({ align='left', color='default', weight=500, children }): JSX.Element => {
   return (
      <span className={`caption align-${align} color-${color} weight-${weight}`}>{ children }</span>
   )
}
