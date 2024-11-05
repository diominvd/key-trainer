import React from 'react';
// Styles;
import '@styles/components/Layout.scss';
import { OrientationType } from '@config/types';


interface LayoutInterface {
   orientation: OrientationType;
   style?: React.CSSProperties;
   children: React.ReactNode;
}

export const Layout: React.FC<LayoutInterface> = ({ orientation, style, children }): JSX.Element => {
   return (
      <div className={`layout orientation-${orientation}`} style={style}>
         { children }
      </div>
   )
}