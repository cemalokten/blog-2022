import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import overrides from "./theme";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { global } from "./style/globalStyles";
import Fonts from "./theme/components/fonts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ChakraProvider theme={overrides} resetCSS={false}>
    <Fonts />
    <React.StrictMode>
      <Global styles={global} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
