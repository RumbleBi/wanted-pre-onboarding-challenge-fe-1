import ReactDOM from "react-dom/client";
import App from "./App";
import { Global } from "@emotion/react";
import { globalStyles } from "./styles/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <Global styles={globalStyles} />
    <App />
  </>
);
