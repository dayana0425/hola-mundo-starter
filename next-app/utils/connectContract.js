import abiJSON from "./ABI/HolaMundo.json";
import { ethers } from "ethers";

function connectContract() {
    const contractAddress = "0x5A10bc35892b08A17c154C223ff4550e842BeeF8";
    const contractABI = abiJSON;
    let contract;
    try {
        if (window !== 'undefined' && typeof window.ethereum !== 'undefined') {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
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