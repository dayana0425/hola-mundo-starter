import { ethers } from "hardhat";
import * as holaMundoJson from "../artifacts/contracts/HolaMundo.sol/HolaMundo.json";
import "dotenv/config";
import * as fs from "fs";

const EXPOSED_KEY =
  "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f";

async function main() {
  const wallet =
    process.env.MNEMONIC && process.env.MNEMONIC.length > 0
      ? ethers.Wallet.fromMnemonic(process.env.MNEMONIC)
      : new ethers.Wallet(process.env.PRIVATE_KEY ?? EXPOSED_KEY);

  console.log(`Using address ${wallet.address}`);

  const provider = new ethers.providers.AlchemyProvider(
    "maticmum",
    process.env.MUMBAI_ALCHEMY_KEY
  );
  const signer = wallet.connect(provider);

  console.log("Deploying HolaMundo contract");

  const contractFactory = new ethers.ContractFactory(
    holaMundoJson.abi,
    holaMundoJson.bytecode,
    signer
  );

  const contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await contract.deployed();

  fs.writeFileSync(
    "../next-app/utils/ContractAddresses/MumbaiContractAddress.ts",
    `export const mumbaiContractAddress = "${contract.address}"`
  );

  console.log("Completed");
  console.log(`Contract deployed at ${contract.address}`);
  console.log(
    "Contract address saved at: ../next-app/utils/ContractAddresses/MumbaiContractAddress.ts"
  );
}

// We recommend this pattern to be able to use async/await everywhere and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
