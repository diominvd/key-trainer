import React from 'react';
// Types;
import { AlignType, ColorType, WeightType } from '@config/types.ts';
// Styles;
import '@styles/components/Headline.scss';


interface HeadlineInterface {
   align?: AlignType;
   color?: ColorType;
   weight?: WeightType;
   children: React.ReactNode;
}

export const Headline: React.FC<HeadlineInterface> = ({ align='left', color='default', weight=500, children }): JSX.Element => {
   return (
      <span className={`headline align-${align} color-${color} weight-${weight}`}>{ children }</span>
   )
}
