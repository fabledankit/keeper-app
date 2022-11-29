import React from "react";
// import ReactDOM from "react-dom";
import * as ReactDOMClient from 'react-dom/client';
import App from "./components/App";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <h1><App /></h1>
);
