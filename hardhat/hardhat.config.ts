import "dotenv/config";
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-abi-exporter";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (_taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

task("hello", "Prints 'Hello, World!'", async () => {
  console.log("Hello, World!");
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const { MUMBAI_API_URL, GOERLI_API_URL, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: GOERLI_API_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    },
    mumbai: {
      url: MUMBAI_API_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  abiExporter: {
    path: "../next-app/utils/ABI",
    runOnCompile: true,
    clear: true,
    flat: true,
    only: [],
    spacing: 2,
    pretty: false,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
