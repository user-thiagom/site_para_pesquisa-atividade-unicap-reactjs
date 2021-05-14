import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PesquisaProvider from './context/pesquisaPag1'

ReactDOM.render(
  <React.StrictMode>
    <PesquisaProvider>
      <App />
    </PesquisaProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
