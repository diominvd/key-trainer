import React from 'react';
// Components;
import { Layout } from '@ui/Layout/Layout.tsx';
import { Guide } from './components/Guide.tsx';
import { BriefStatistics } from './components/BriefStatistics.tsx';
import { TrainingText } from './components/TrainingText.tsx';
import { Keyboard } from './components/Keyboard/Keyboard.tsx';
// Styles;
import '@styles/components/Page.scss';


export const Home: React.FC = (): JSX.Element => {
   return (
      <div className='page' id='home'>
         <Layout orientation='vertical' style={{alignItems: 'center', gap: '50px'}}>
            <Guide />
            <BriefStatistics />
            <TrainingText />
            <Keyboard />
         </Layout>
      </div>
   )
}