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
//firebase
import { auth } from './configs/fbConfig';
import { onAuthStateChanged } from 'firebase/auth';


const store = createStore(rootReducer, applyMiddleware(thunk));

onAuthStateChanged(auth, user => (ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
     <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)))




