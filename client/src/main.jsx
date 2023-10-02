import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PasteContextProvider } from "./context/PasteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PasteContextProvider>
      <App />
    </PasteContextProvider>
  </React.StrictMode>
);
