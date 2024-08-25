import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { router } from "./Router";
import Web3Provider from "./config/web3/Provider";

export default function App() {
  return (
    <Web3Provider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Web3Provider>
  );
}
