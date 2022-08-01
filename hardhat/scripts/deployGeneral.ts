import { ethers } from "hardhat";
import "dotenv/config";

async function main() {
  const contractFactory = await ethers.getContractFactory("HolaMundo");
  console.log("Deploying HolaMundo contract");
  const contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await contract.deployed();
  console.log("Completed");
  console.log(`Contract deployed at ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
