import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
     <Auth0Provider
    domain="dev-fpx8cyvaghw1sj6r.us.auth0.com"
    clientId="WifYdELO95OvG6gzoEoRkjQakolFHH9U"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  
);

 