import React from 'react';
// Styles;
import '@styles/components/Guide.scss';
import { Caption } from '@ui/typography/Caption';
import { Layout } from '@ui/Layout/Layout';


export const Guide: React.FC = (): JSX.Element => {
   return (
      <div className='guide'>
         <div className='left-border'></div>
         <Layout orientation='vertical' style={{gap: '10px', flex: 1, padding: '20px'}}>
            <Caption color='gray'>• Scroll mouse wheel up/down fro change text length</Caption>
            <Caption color='gray'>• Use 'Control' key for change layout</Caption>
            <Caption color='gray'>• Press 'Enter' key for reload training</Caption>
         </Layout>
         <div className='right-border'></div>
      </div>
   )
}