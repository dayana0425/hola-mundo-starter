import abiJSON from "./ABI/HolaMundo.json";
import { useContract } from 'wagmi'


function connectPolygon() {
    const contractAddress = "0xbd699C6477ed5D98C499E8C9bd8Ea1E41D128DbA";
    const contractABI = abiJSON;
    let contract; 
    contract = useContract({
        addressOrName: contractAddress,
        contractInterface: contractABI,
    });
    return contract;
}

export default connectPolygon;