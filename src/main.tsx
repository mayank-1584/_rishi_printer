import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import React, { useEffect } from "react";

const Root = () => {
  useEffect(() => {
    const loader = document.querySelector(".loading-page") as HTMLElement;
    if (loader) {
      // Add a small delay to allow the animation to be seen if desired, 
      // or just remove it immediately.
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500); // match transition time in CSS
      }, 7000); // 7 seconds delay to allow for the 6s animation + buffer
    }
  }, []);

  return <App />;
};

createRoot(document.getElementById("root")!).render(<Root />);