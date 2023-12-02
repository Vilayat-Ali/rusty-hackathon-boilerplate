// lib
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

// redux store
import { store } from "./redux/store";

// app component
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
