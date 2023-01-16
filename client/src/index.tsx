import ReactDOM from "react-dom/client";
import App from "./App";
import { Global } from "@emotion/react";
import { globalStyles } from "./styles/globalStyles";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <ReactQueryDevtools initialIsOpen={true} />
      <App />
    </QueryClientProvider>
  </>
);
