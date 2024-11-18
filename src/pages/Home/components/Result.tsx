import React from 'react';
// Components;
import { useTrainingProvider } from '@providers/TrainingProvider.tsx';
import { Text } from '@ui/Typography/Text.tsx';
import { Layout } from '@ui/Layout/Layout.tsx';
// Styles;
import '@styles/components/Result.scss';


export const Result: React.FC = (): JSX.Element => {
   const { trainingText, trainingUserInput, trainingTimerValue, typingSpeed, typingAccuracy, typingMisprints } = useTrainingProvider();

   return (
      (
         (trainingUserInput.length === trainingText.length) ? (
            <div className='training-result'>
               <Layout orientation='horizontal' style={{gap: '50px'}}>
                  <Layout orientation='horizontal' style={{gap: '10px'}}>
                     <Text>Speed:</Text>
                     <Text color='primary'>{ typingSpeed } CPM</Text>
                  </Layout>
                  <Layout orientation='horizontal' style={{gap: '10px'}}>
                     <Text>Accuracy:</Text>
                     <Text color='primary'>{ typingAccuracy }%</Text>
                  </Layout>
                  <Layout orientation='horizontal' style={{gap: '10px'}}>
                     <Text>Misprints:</Text>
                     <Text color='primary'>{ typingMisprints }</Text>
                  </Layout>
                  <Layout orientation='horizontal' style={{gap: '10px'}}>
                     <Text>Time:</Text>
                     <Text color='primary'> { trainingTimerValue.toFixed(3) }s</Text>
                  </Layout>
               </Layout>
               <span className='reference-text'>
                  { trainingText }
               </span>
               <span className='tip'>
                  Press <span className='key'>Enter</span> for restart test
               </span>
            </div>
         ) : (
            <></>
         )
      )
   )
}