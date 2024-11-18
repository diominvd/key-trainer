import React from 'react';
import { NavLink } from 'react-router-dom';
// Config;
import { links, pagesConfig } from '@config/pages.ts';
// Styles;
import '@styles/components/Header.scss';


export const Header: React.FC = (): JSX.Element => {
   return (
      <div className='header'>
         <div id='branding'>
            <span className='app-name'>Key-Trainer</span>
            <span className='divider'>|</span>
            <span className='author'>powered by diominvd</span>
         </div>
         <div id='navigation'>
            <NavLink to={pagesConfig.home}>
               <span className='navigation-element'>Home</span>
            </NavLink>
            <span className='divider'>|</span>
            <NavLink to={pagesConfig.guide}>
               <span className='navigation-element'>Guide</span>
            </NavLink>
            <span className='divider'>|</span>
            <a href={links.github}>
               <span className='navigation-element'>GitHub</span>
            </a>
         </div>
      </div>
   )
}