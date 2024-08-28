import React from "react";
import { development, UseInkathonProvider } from "@scio-labs/use-inkathon";
import { env, getDeployments } from "./deployments";

export default function InkProvider({ children }) {
  return (
    <UseInkathonProvider
      connectOnInit={false}
      appName="STAR-EX"
      defaultChain={env.defaultChain}
      deployments={getDeployments()}
    >
      {children}
    </UseInkathonProvider>
  );
}
