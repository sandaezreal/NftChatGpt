import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { fetchUsers } from './app/features/users/usersSlice'
import { store } from '../../my-app/src/app/store/store'
//import { worker } from './api/server'
async function start() {

//await worker.start({ onUnhandledRequest: 'bypass' })

store.dispatch(fetchUsers())
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
}
start()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
