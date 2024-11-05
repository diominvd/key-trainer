import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Config;
import { pagesConfig } from '@config/pages';
// Providers;
import { TrainingProvider } from '@providers/TrainingProvider';
// Components;
import { Home } from '@pages/Home/Home';


export const App: React.FC = (): JSX.Element => {
  return (
    <TrainingProvider>
      <BrowserRouter>
        <Routes>
          <Route index path={pagesConfig.home} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </TrainingProvider>
  )
}
