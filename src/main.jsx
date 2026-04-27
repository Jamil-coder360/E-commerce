import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/css";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import ThemeProvider from "./context/ThemeContext";
import store from "./store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
