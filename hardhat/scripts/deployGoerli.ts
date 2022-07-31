import { ethers } from "ethers";
import "dotenv/config";
import * as holaMundoJson from "../artifacts/contracts/HolaMundo.sol/HolaMundo.json";
import * as fs from "fs";

// This key is already public on Herong's Tutorial Examples - v1.03, by Dr. Herong Yang
// Never expose your keys like thia
const EXPOSED_KEY =
  "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f";

async function main() {
  const wallet =
    process.env.MNEMONIC && process.env.MNEMONIC.length > 0
      ? ethers.Wallet.fromMnemonic(process.env.MNEMONIC)
      : new ethers.Wallet(process.env.PRIVATE_KEY ?? EXPOSED_KEY);

  console.log(`Using address ${wallet.address}`);

  const provider = new ethers.providers.AlchemyProvider(
    "goerli",
    process.env.GOERLI_ALCHEMY_KEY
  );
  const signer = wallet.connect(provider);
  const balanceBN = await signer.getBalance();
  const balance = Number(ethers.utils.formatEther(balanceBN));

  console.log(`Wallet balance ${balance}`);

  if (balance < 0.01) {
    throw new Error("Not enough ether");
  }

  console.log("Deploying HolaMundo contract");

  const holaMundoFactory = new ethers.ContractFactory(
    holaMundoJson.abi,
    holaMundoJson.bytecode,
    signer
  );

  const holaMundoContract = await holaMundoFactory.deploy();

  console.log("Awaiting confirmations");

  await holaMundoContract.deployed();

  fs.writeFileSync(
    "../next-app/utils/ContractAddresses/GoerliContractAddress.ts",
    `export const goerliContractAddress = "${holaMundoContract.address}"`
  );

  console.log("Completed");
  console.log(`Contract deployed at ${holaMundoContract.address}`);
  console.log(
    "Contract address saved at: ../next-app/utils/ContractAddresses/GoerliContractAddress.ts"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
