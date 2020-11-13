import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from "react-redux";
import reportWebVitals from './reportWebVitals';
import Jwt from "jsonwebtoken";
import Centrifuge from "centrifuge";
import SockJS from "sockjs-client";

import App from './App';
import store from "./store";

// Configure Centrifuge
const token = Jwt.sign({ sub: 'dalongdemo'}, '05f0842d-c302-4036-a19f-6ac263b9f620');
const centrifuge = new Centrifuge("http://localhost:8000/connection/sockjs", {
    sockjs: SockJS
})
centrifuge.setToken(token)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App centrifuge={centrifuge} />
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
