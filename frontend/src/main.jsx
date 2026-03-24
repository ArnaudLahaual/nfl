import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { ConfigProvider } from "antd";
import frFR from "antd/locale/fr_FR";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ConfigProvider locale={frFR}>
      <AuthProvider>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          autoHideDuration={2000}
        >
          <App />
        </SnackbarProvider>
      </AuthProvider>
    </ConfigProvider>
  </Provider>,
);
