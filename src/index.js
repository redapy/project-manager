import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//redux
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
//thunk
import thunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
     <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


