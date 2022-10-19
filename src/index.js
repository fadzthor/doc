import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Doc from './components/light';
import Rko from './components/doc-api-rko';
import Upload from './components/doc-api-upload';
import User from './components/doc-api-user';
import Warehouse from './components/doc-api-warehouse';
import Warehousecategory from './components/doc-api-warehouse-category';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Doc /> */}
    {/* <Rko /> */}
    {/* <Upload /> */}
    {/* <User /> */}
    {/* <Warehouse /> */}
    {/* <Warehousecategory /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
