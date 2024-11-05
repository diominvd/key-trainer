import React from 'react';
// Providers;
import { useTrainingProvider } from '@providers/TrainingProvider.tsx';
// Components;
import { Layout } from '@ui/Layout/Layout.tsx';
import { Text } from '@ui/typography/Text';
// Styles;
import '@styles/components/BriefStatistics.scss';


export const BriefStatistics: React.FC = (): JSX.Element => {
   const { trainingTimerValue, trainingTextLength, typingSpeed, typingAccuracy, typingMisprints } = useTrainingProvider();

   const layoutStyle = {
      gap: '30px',
   }

   return (
      <Layout orientation='horizontal' style={layoutStyle}>
         <Text>Words:
            <Text color='primary'> { trainingTextLength }</Text>
         </Text>
         <Text>|</Text>
         <Text>Speed:
            <Text color='primary'> { typingSpeed } CPM</Text>
         </Text>
         <Text>|</Text>
         <Text>Accuracy:
            <Text color='primary'> { typingAccuracy }%</Text>
         </Text>
         <Text>|</Text>
         <Text>Misprints: 
            <Text color='primary'> { typingMisprints }</Text>
         </Text>
         <Text>|</Text>
         <Text>Time: 
            <Text color='primary'> { trainingTimerValue.toFixed(3) }s</Text>
         </Text>
      </Layout>
   )
}