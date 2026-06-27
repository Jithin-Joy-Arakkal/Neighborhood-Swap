import React from 'react'
import ReactDOM from "react-dom/client";

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { ItemProvider } from "./context/ItemContext";

import '@fontsource-variable/afacad';

import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ItemProvider>
        <App />
      </ItemProvider>
    </BrowserRouter>
  </React.StrictMode>
);
