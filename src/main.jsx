import React from "react";
import ReactDOM from "react-dom/client";
import dbapp from "./FirebaseConfiguration/FirebaseDbConnection.js";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
