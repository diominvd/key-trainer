import React from 'react';
// Components;
import { Layout } from '@ui/Layout/Layout.tsx';
import { TrainingText } from './components/TrainingText/TrainingText.tsx';
import { Keyboard } from './components/Keyboard/Keyboard.tsx';
// Styles;
import '@styles/components/Page.scss';
import { Result } from './components/Result.tsx';


export const Home: React.FC = (): JSX.Element => {
   return (
      <div className='page' id='home'>
         <Layout orientation='vertical' style={{alignItems: 'center', gap: '50px'}}>
            <Result />
            <TrainingText />
            <Keyboard />
         </Layout>
      </div>
   )
}