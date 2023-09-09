import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { StateContextProvider } from "./context/ContractContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
// import { Mumbai } from "@thirdweb-dev/chains";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain="mumbai"
      clientId="e8957e000ba06e5b514f9ae6c936bd19"
    >
      <BrowserRouter>
        <StateContextProvider>
          <AuthProvider>
            <Toaster position="top-center" />
            <App />
          </AuthProvider>
        </StateContextProvider>
      </BrowserRouter>
    </ThirdwebProvider>
  </React.StrictMode>
);
