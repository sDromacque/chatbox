import React from 'react';
import { render } from 'react-dom';
import Connexion from './components/Connexion';
import App from './components/App';
import NotFound from './components/NotFound';
//CSS
import './index.css';

import { BrowserRouter, Match, Miss } from 'react-router';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Connexion} />
        <Match pattern="/pseudo/:pseudo" component={App} />
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
};

render(
  <Root />,
  document.getElementById('root')
);
