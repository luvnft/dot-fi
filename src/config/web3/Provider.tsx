import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { sepolia } from "wagmi/chains";
import { http, createConfig, WagmiProvider } from "wagmi";
import { walletConnect, injected, coinbaseWallet } from "wagmi/connectors";

import { defineChain } from "viem";

export const mantaSepolia = defineChain({
  id: 3441006,
  name: "Manta Sepolia",
  nativeCurrency: { name: "MANTA", symbol: "MANTA", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://pacific-rpc.sepolia-testnet.manta.network/http"],
    },
  },
  blockExplorers: {
    default: {
      name: "testscan",
      url: "https://pacific-explorer.sepolia-testnet.manta.network",
    },
  },
});
export const mantaTestnet = defineChain({
  id: 3441005,
  name: "Manta Testnet",
  nativeCurrency: { name: "MANTA", symbol: "MANTA", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://manta-testnet.calderachain.xyz/http"] },
  },
  blockExplorers: {
    default: {
      name: "testscan",
      url: "https://pacific-explorer.testnet.manta.network",
    },
  },
});

export const opBnbTestnet = defineChain({
  id: 5611,
  name: "opBNB Testnet",
  nativeCurrency: { name: "tBNB", symbol: "tBNB", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://opbnb-testnet-rpc.bnbchain.org"] },
  },
  blockExplorers: {
    default: { name: "testscan", url: "https://opbnb-testnet.bscscan.com" },
  },
});

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "861ef743dceed75deb813e6d390dc4a8";

// 2. Create wagmiConfig
const metadata = {
  name: "TEST",
  description: "TEST Metadata",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [
  sepolia,
  //   mantaTestnet,
  //   mantaSepolia,
  // opBnbTestnet,
] as const;

const config = createConfig({
  chains,
  transports: {
    [sepolia.id]: http(),
    // [mantaSepolia.id]: http(),
    // [mantaTestnet.id]: http(),
    // [opBnbTestnet.id]: http(),
  },
  connectors: [
    walletConnect({
      projectId,
      metadata,
      showQrModal: false,
    }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0],
    }),
  ],
});

// // // 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  themeMode: "dark",
  // themeVariables: {
  //   "--w3m-color-mix": "#1B2258",
  //   "--w3m-color-mix-strength": 40,
  // },
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: false, // Optional - false as default
  allowUnsupportedChain: true,
});

export default function Web3Provider({ children }) {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
// declare module "wagmi" {
//   interface Register {
//     config: typeof config;
//   }
// }
