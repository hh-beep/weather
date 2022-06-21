/* React */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/* Files */
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Font */
import WebFont from 'webfontloader';



WebFont.load({
  google: {
    families: ['Inter']
  }
})




const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);



reportWebVitals();
