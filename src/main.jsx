import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}

if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const register = () =>
      navigator.serviceWorker.register("/sw.js").catch(() => {});

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(register, { timeout: 3000 });
    } else {
      window.setTimeout(register, 1000);
    }
  });
}
