import { SubstrateDeployment, shibuya } from "@scio-labs/use-inkathon";

export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_URL ??
    process?.env?.NEXT_PUBLIC_VERCEL_URL ??
    "http://localhost:3000";

  // Include `https://` when not localhost
  url = url.includes("http") ? url : `https://${url}`;

  // Append trailing `/` if not present
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;

  return url;
};

/**
 * Returns the supported chains from the environment variables.
 * If the environment variable is not set, it returns the default chain.
 */
export const getSupportedChains = (): string[] => {
  const defaultChain = shibuya;
  // const defaultChain = process.env.NEXT_PUBLIC_DEFAULT_CHAIN;
  // const parsedChains =
  //   !!process.env.NEXT_PUBLIC_SUPPORTED_CHAINS &&
  //   JSON.parse(process.env.NEXT_PUBLIC_SUPPORTED_CHAINS);
  const parsedChains = ["shibuya", "contracts", "development"];

  return parsedChains || [defaultChain];
};

export const env = {
  // url: getURL(),
  isProduction: false,
  // defaultChain: process.env.NEXT_PUBLIC_DEFAULT_CHAIN!,
  defaultChain: shibuya,
  supportedChains: getSupportedChains(),
};

/**
 * Add or change your custom contract ids here
 * DOCS: https://github.com/scio-labs/inkathon#2-custom-contracts
 */
export enum ContractIds {
  Greeter = "greeter",
}

export const getDeployments = async (): Promise<SubstrateDeployment[]> => {
  // const networks = env.supportedChains;
  // const deployments: SubstrateDeployment[] = [];

  // for (const networkId of networks) {
  //   for (const contractId of Object.values(ContractIds)) {
  //     const abi = await import(
  //       `@inkathon/contracts/deployments/${contractId}/${contractId}.json`
  //     );
  //     const { address } = await import(
  //       `@inkathon/contracts/deployments/${contractId}/${networkId}.ts`
  //     );

  //     deployments.push({ contractId, networkId, abi, address });
  //   }
  // }

  return [
    // ...deployments,
    // {
    //   contractId: 'flipo',
    //   networkId: 'shibuya',
    //   abi: await import(`./other_contract.json`),
    //   address: 'W258GtkDnKi5xVdP9Yg3JYKj7XuGAzApn83gL66aWp6CqEE',
    // },
    {
      contractId: "shop",
      networkId: "shibuya",
      abi: await import(`./erc1155.json`),
      address: "aqKw4HDFGjdynM4upDYzWbNspNG8ov4DV58LiS6QRpgb812",
    },
    {
      contractId: "1155",
      networkId: "shibuya",
      abi: await import(`./erc1155.json`),
      address: "aqKw4HDFGjdynM4upDYzWbNspNG8ov4DV58LiS6QRpgb812",
    },
    {
      contractId: "1155-material",
      networkId: "shibuya",
      abi: await import(`./erc1155.json`),
      address: "aqKw4HDFGjdynM4upDYzWbNspNG8ov4DV58LiS6QRpgb812",
    },
    // {
    //   contractId: "1155-starship",
    //   networkId: "contract",
    //   abi: await import(`./erc1155.json`),
    //   address: "aqKw4HDFGjdynM4upDYzWbNspNG8ov4DV58LiS6QRpgb812",
    // },
    // {
    //   contractId: "1155-material",
    //   networkId: "contract",
    //   abi: await import(`./erc1155.json`),
    //   address: "aqKw4HDFGjdynM4upDYzWbNspNG8ov4DV58LiS6QRpgb812",
    // },
  ];
};
