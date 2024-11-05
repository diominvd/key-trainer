import React, { useEffect, useState } from 'react';
// Styles;
import '@styles/components/KeyboardKey.scss';


interface KeyboardKeyInterface {
   char: string;
   width?: number;
}

export const KeyboardKey: React.FC<KeyboardKeyInterface> = ({ char, width }): JSX.Element => {
   const [pressedStatus, setPressedStatus] = useState<boolean>(false);

   const highlightKeyboardKey = (e: KeyboardEvent) => {
      if (e.key === char) {
         setPressedStatus(true);
         setTimeout(() => setPressedStatus(false), 100)
      }
   }

   useEffect(() => {
      window.addEventListener('keydown', highlightKeyboardKey);

      return () => {
         window.removeEventListener('keydown', highlightKeyboardKey);
      }
   })

   return (
      <div className={`keyboard-key pressed-${pressedStatus}`} style={{width: `${width}px`}}>
         <span>{ char.toUpperCase() }</span>
      </div>
   )
}