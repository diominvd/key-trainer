import React from 'react';
// Components;
import { Layout } from '@ui/Layout/Layout';
import { TrainingText } from './components/TrainingText/TrainingText';
import { Keyboard } from './components/Keyboard/Keyboard';
// Styles;
import '@styles/components/Page.scss';
import { Result } from './components/Result';


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
