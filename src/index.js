import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
    // Stric mode of React for additiona checks and warnings
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
