import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import App from "./App";
import { store } from "./store";
import "./assets/bootstrap-customized.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

i18n.use(initReactI18next).init({
    supportedLngs: ["en-US", "tr-TR"],
    resources: {
        "tr-TR": {
            translation: require("./assets/locales/tr-TR.json"),
        },
        "en-US": {
            translation: require("./assets/locales/en-US.json"),
        },
    },
});

root.render(
    // TODO: upgrade react-dom to 6 cause it does not work with react 18 strict mode
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    // </React.StrictMode>
);

serviceWorker.unregister();
