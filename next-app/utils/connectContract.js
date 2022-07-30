import abiJSON from "./ABI/HolaMundo.json";
import { ethers } from "ethers";

function connectContract() {
    const contractAddress = "0x0xAC7CE26A7d8Dd50EddEb4bd34EfEe4E02d7Be6B4";
    const contractABI = abiJSON.abi;
    let contract;
    try {
        const { ethereum } = window;
        if (ethereum.chainId === "0x13881") {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          ); 
        } else {
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log("ERROR:", error);
      }
      return contract;
}
  
  export default connectContract;