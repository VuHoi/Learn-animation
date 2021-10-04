import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { history, store } from 'store';
import { RootProps } from 'types/common';

const root = document.getElementById('root');
const render = (Component: React.FC<RootProps>) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component history={history} />
    </Provider>,
    root
  );
};
render(App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
