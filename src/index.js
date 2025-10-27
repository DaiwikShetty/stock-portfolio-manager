import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ⬇️ Import the PortfolioProvider context
import { PortfolioProvider } from './context/PortfolioContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

// ⬇️ Wrap <App /> in the context provider
root.render(
  <React.StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </React.StrictMode>
);

// ❌ Optional: remove this if you're not using it
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
