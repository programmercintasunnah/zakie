import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// DISABLE ALL ANIMATIONS FOR DEBUGGING
// import AOS from "aos";
// import "aos/dist/aos.css";

// Manual smooth scroll - NO AUTO-SCROLL ON LOAD
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// AOS.init({
//   duration: 1000,
//   offset: 100,
//   easing: "ease-in-out",
//   delay: 200,
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // REMOVED StrictMode FOR DEBUGGING
  <App />
);
