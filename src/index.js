import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import FilterBlock from './FilterBlock/FilterBlock';
import ActionBar from './ActionBar/ActionBar';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <header>
            <h1>Search for Sessions</h1>
        </header>
        <FilterBlock />
        <ActionBar />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
