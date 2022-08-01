import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useNetwork, useContract, useProvider, useSigner } from 'wagmi';

import styles from '../styles/Home.module.css';
import Spinner from "./Components/Spinner";

import abiJSON from "../utils/ABI/HolaMundo.json";
import { goerliContractAddress } from "../utils/ContractAddresses/GoerliContractAddress";
import { mumbaiContractAddress } from "../utils/ContractAddresses/MumbaiContractAddress";

const Home: NextPage = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  // Front-End States
  const [greeting, setGreetingState] = useState('');
  const [newGreeting, setNewGreetingState] = useState('');
  const [showSpinner, setSpinner] = useState(false);

  // ESP: interactuando con contratos en goerli y mumbai usando WAGMI
  // EN: interacting with contracts on goerli & mumbai using WAGMI
  const { chain } = useNetwork();
  const contractABI = abiJSON;
  const signer = useSigner();
  const provider = useProvider();

  // Mumabi Contract
  const contractOnMumbai = useContract({
      addressOrName: mumbaiContractAddress,
      contractInterface: contractABI,
      signerOrProvider: signer.data,
  });
  // Goerli Contract
  const contractOnGoerli = useContract({
    addressOrName: goerliContractAddress,
    contractInterface: contractABI,
    signerOrProvider: signer.data,
  });

  // Printing info to console - delete if not useful
  if(chain && contractOnGoerli && contractOnMumbai && contractABI && signer && provider){
    console.log('');
    console.log("Current Chain: ", chain);
    console.log("Contract Address on Mumbai: ", mumbaiContractAddress);
    console.log("Contract Addresses on Goerli: ", goerliContractAddress);
    console.log("Contract ABI: ", contractABI);
    console.log("Goerli Contract Info: ", contractOnGoerli);
    console.log("Mumbai Contract Info: ", contractOnMumbai);
    console.log("Signer", signer);
    console.log("Provider", provider);
    console.log('');
  }

  async function fetchGreeting() {
    if((chain && chain.name == "Polygon Mumbai")) {
      console.log("Polygon Mumbai: Obtener Nombre");
      const nombre = await contractOnMumbai.obtenerNombre();
      if(nombre) {
        console.log(nombre);
        setGreetingState(nombre);
        setSpinner(false);
      }
    }
    else if ((chain && chain.name == "Goerli")) {
      console.log("Goerli: Obtener Nombre");
      const nombre = await contractOnGoerli.obtenerNombre();
      if(nombre) {
        console.log(nombre);
        setGreetingState(nombre);
        setSpinner(false);
      }
    }
    else {
      console.log("No hay un chain detectado");
    }
  }

  async function setGreeting() {
    if(chain && chain.name == "Polygon Mumbai") {
      console.log("Polygon Mumbai: Cambiar Nombre");
      const nombreTxn = await contractOnGoerli.cambiarNombre(newGreeting);
      setSpinner(true);
      setGreetingState('');
      await nombreTxn.wait();
      fetchGreeting();
    }
    else if ((chain && chain.name == "Goerli")) {
      console.log("Goerli: Cambiar Nombre");
      const nombreTxn = await contractOnGoerli.cambiarNombre(newGreeting);
      setSpinner(true);
      setGreetingState('');
      await nombreTxn.wait();
      fetchGreeting();
    }
    else {
      console.log("No hay un chain detectado");
    }
  }
  return (
    <>
      {domLoaded && (
    <div className={styles.container}>
      <Head>
        <title>Hola Mundo Starter</title>
      </Head>
      <main className={styles.main}>

        {/* Rainbow Kit - Connect Wallet Modal */}
        <ConnectButton label="Conectar Billetera" chainStatus="icon"/>

        {/* WAGMI useNetwork Info */}
        <br></br>
        <div>
          <h1 className={styles.description}>      
            {chain &&
            <div>
              <b>Actualmente conectado a la red:</b>
              <br></br>
              <u>{chain.name}</u>
            </div>}
          </h1>
        </div>

        {/* Mostrar Saludo */}
        <br></br>
        <div className="space-y-8">
          <div className="flex flex-row space-x-1">
              <h1 className="p-2 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Hola</h1>
              <h1 className="p-2 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-green-400 to-red-600">{greeting && typeof window !== 'undefined' ? greeting : "<???>"}</h1>
              { showSpinner && typeof window !== 'undefined' ? <Spinner/> : "" }
              <h1 className="p-2 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-orange-400 to-violet-600">!</h1>
          </div>
        </div>

        {/* Cambiar Saludo */}
        <br></br>
        <div className="space-y-8">
          <div className="flex flex-col space-y-4">
            <input
              className="border p-4 text-center"
              onChange={e => setNewGreetingState(e.target.value)}
              placeholder="Escribir Nuevo Saludo"/>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-md"
              onClick={setGreeting}>
              Cambiar Saludo en el Blockchain
            </button>
          </div>
        </div>


        {/* Enlaces De Documentación */}
        <br></br>
        <div className={styles.grid}>
          {/* Rainbow Kit */}
          <a href="https://rainbowkit.com" className={styles.card}>
            <h2>RainbowKit Documentation &rarr;</h2>
            <p>Learn how to customize your wallet connection flow.</p>
          </a>
           {/* WAGMI */}
          <a href="https://wagmi.sh" className={styles.card}>
            <h2>wagmi Documentation &rarr;</h2>
            <p>Learn how to interact with Ethereum.</p>
          </a>
          {/* Rainbow Kit Ejemplos */}
          <a
            href="https://github.com/rainbow-me/rainbowkit-examples"
            className={styles.card}>
            <h2>RainbowKit Examples &rarr;</h2>
            <p>Discover boilerplate example RainbowKit projects.</p>
          </a>
          {/* Next.js */}
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Next.js Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          {/* Next.js Ejemplos */}
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}>
            <h2>Next.js Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
          {/* Lanzar Proyecto a Vercel */}
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>
      {/* Footer para dar credito a Rainbow Kit */}
      <footer className={styles.footer}>
        <a href="https://rainbow.me" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div> )}
    </>
  ); 
};

export default Home;
