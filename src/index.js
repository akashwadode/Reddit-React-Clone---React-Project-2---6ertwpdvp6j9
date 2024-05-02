import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import VoteProvider from "./context/VoteProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <VoteProvider>
        <App />
      </VoteProvider>
    </AuthProvider>
  </BrowserRouter>
);
