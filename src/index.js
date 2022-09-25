import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ResultContextProvider } from './Components/Context/ResultContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ResultContextProvider>
    <Router>
    <App />
    </Router>
    </ResultContextProvider>
);
