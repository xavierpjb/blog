import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Route, Routes} from 'react-router-dom';

import './index.css';
import App from './App';
import {InterviewPrep} from './InterviewPrep';
import {MathPrep} from './Math';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/interview-prep" element={<InterviewPrep />} />
        <Route path="/math-prep" element={<MathPrep />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
