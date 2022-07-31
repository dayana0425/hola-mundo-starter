import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { useNetwork, useContract, useProvider, useSigner } from 'wagmi';
import styles from '../styles/Home.module.css';
import connectContract from "../utils/connectContract";
import Spinner from "./Components/Spinner";
import abiJSON from "../utils/ABI/HolaMundo.json";



const Home: NextPage = () => {
  const [greeting, setGreetingState] = useState('');
  const [newGreeting, setNewGreetingState] = useState('');
  const [showSpinner, setSpinner] = useState(false);
  const { chain } = useNetwork();
  const contractAddress = "0xbd699C6477ed5D98C499E8C9bd8Ea1E41D128DbA";
  const contractABI = abiJSON;
  const prov = useSigner();
  console.log(prov)
  const contractP = useContract({
      addressOrName: contractAddress,
      contractInterface: contractABI,
      signerOrProvider: prov.data,
  });

  async function fetchGreeting() {
    if(chain && chain.name == "Polygon Mumbai") {
      console.log("Polygon Mumbai")
      const nombre = await contractP.obtenerNombre();
      if(nombre){
        setGreetingState(nombre);
        setSpinner(false);
      }
    }
    else {
      const holaMundoContract = await connectContract();
      const name = await holaMundoContract?.obtenerNombre();
      if(name){
        setGreetingState(name);
        setSpinner(false);
      }
    }
  }


  async function setGreeting() {
    if(chain && chain.name == "Polygon Mumbai") {
      console.log("polygon")
      const txnP = await contractP.cambiarNombre(newGreeting);
      setSpinner(true);
      setGreetingState('');
      await txnP.wait();
      fetchGreeting();
    }
    else{
      const holaMundoContract = await connectContract();
      const txn = await holaMundoContract?.cambiarNombre(newGreeting);
      setSpinner(true);
      setGreetingState('');
      await txn.wait();
      fetchGreeting();
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Hola Mundo Starter</title>
      </Head>
      <main className={styles.main}>

        {/* Rainbow Kit - Connect Wallet Modal */}
        <ConnectButton chainStatus="icon"/>

        {/* WAGMI useNetwork Info */}
        <br></br>
        <h1 className={styles.description}>      
          {chain && <div><b>Currently Connected To:</b>
          <br></br>
          <u>{chain.name}</u></div>}
        </h1>

        {/* Display Greeting */}
        <br></br>
        <div className="space-y-8">
          <div className="flex flex-row space-x-1">
              <h1 className="p-2 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">{"Hola "}</h1>
              { greeting ? <h1 className="p-2 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-green-400 to-red-600">{greeting}</h1> 
              : <h1 className="p-2 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-600"> 
              { showSpinner ? <Spinner/> : "-???-"} </h1>}
              <h1 className="p-2 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-orange-400 to-violet-600">!</h1>
          </div>
        </div>

        {/* Change Greeting */}
        <br></br>
        <div className="space-y-8">
          <div className="flex flex-col space-y-4">
            <input
              className="border p-4 text-center"
              onChange={e => setNewGreetingState(e.target.value)}
              placeholder="Write New Greeting"/>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-md"
              onClick={setGreeting}>
              Change Greeting
            </button>
          </div>
        </div>


        {/* Documentation Links  */}
        <br></br>
        <div className={styles.grid}>
          <a href="https://rainbowkit.com" className={styles.card}>
            <h2>RainbowKit Documentation &rarr;</h2>
            <p>Learn how to customize your wallet connection flow.</p>
          </a>

          <a href="https://wagmi.sh" className={styles.card}>
            <h2>wagmi Documentation &rarr;</h2>
            <p>Learn how to interact with Ethereum.</p>
          </a>

          <a
            href="https://github.com/rainbow-me/rainbowkit-examples"
            className={styles.card}
          >
            <h2>RainbowKit Examples &rarr;</h2>
            <p>Discover boilerplate example RainbowKit projects.</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Next.js Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Next.js Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div>
  );
};

export default Home;
