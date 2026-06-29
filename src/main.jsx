import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ItemProvider } from "./context/ItemContext";
import { UserProvider } from './context/UserContext.jsx';

import '@fontsource-variable/afacad';

import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ItemProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ItemProvider>
    </BrowserRouter>
  </React.StrictMode>
);
