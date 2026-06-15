import React from 'react';
// Config;
import { keyboardKeys } from '@config/keyboard.ts';
// Providers;
import { useTrainingProvider } from '@providers/TrainingProvider';
// Components;
import { Layout } from '@ui/Layout/Layout';
import { KeyboardKey } from './KeyboardKey';
// Styles;
import '@styles/components/Keyboard.scss';


export const Keyboard: React.FC = (): JSX.Element => {
   const { layoutLanguage } = useTrainingProvider();

   return (
      <Layout orientation='vertical' style={{alignItems: 'center', gap: '10px'}}>
         {
            Object.values(keyboardKeys[layoutLanguage]).map((keyboardRow, keyboardRowIndex) => (
               <Layout key={keyboardRowIndex} orientation='horizontal' style={{gap: '10px'}}>
                  {
                     keyboardRow.map((keyboardKeyChar, keyboardKeyCharIndex) => (
                        <KeyboardKey key={keyboardKeyCharIndex} char={keyboardKeyChar} />
                     ))
                  }
               </Layout>
            ))
         }
         <KeyboardKey char=' ' width={300}/>
      </Layout>
   )
}
