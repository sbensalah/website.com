import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './Main';
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { BrowserRouter} from 'react-router-dom';

import './languages/i18n'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
   <BrowserRouter> 
    <Main />
    </BrowserRouter>
  </React.Fragment>
);



