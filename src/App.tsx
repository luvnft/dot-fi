import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { router } from "./Router";
import Web3Provider from "./config/web3/Provider";
import InkProvider from "./config/substrate/InkProvider";

export default function App() {
  return (
    <InkProvider>
      <Web3Provider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Web3Provider>
    </InkProvider>
  );
}
