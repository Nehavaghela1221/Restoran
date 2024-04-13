import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Loginpage from './admin/pages/Loginpage';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   
     
        {/* <Loginpage/> */}
     
  </React.StrictMode>
);


