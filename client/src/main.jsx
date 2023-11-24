import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PasteContextProvider } from "./context/PasteContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PasteContextProvider>
        <App />
      </PasteContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
