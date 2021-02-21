// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer, { initialState } from "./APIs/reducer";
import { StateProvider } from "./APIs/StateProvider";

// const siteName = 'Buy On';

// let htmlContent = <React.Fragment>

//                     <h1>{siteName}</h1>
//                     <h2>{siteName} Again</h2>
//                     <p contentEditable="true">{siteName} Again Pls</p>

//                   </React.Fragment>

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// serviceWorker.unregister();
