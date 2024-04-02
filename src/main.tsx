import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BrowserRouter } from "react-router-dom";
import ProvaiderTheme from "./config/ProvaiderTheme.tsx";
import ReduxProvider from "./redux/provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider>
      <ProvaiderTheme>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProvaiderTheme>
    </ReduxProvider>
  </React.StrictMode>
);
