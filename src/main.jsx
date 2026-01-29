import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { ConfigProvider } from "antd";
import frFR from "antd/locale/fr_FR";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ConfigProvider locale={frFR}>
      <App />
    </ConfigProvider>
  </Provider>,
);
