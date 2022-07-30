import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.goerli,
    chain.polygonMumbai
  ],
  [
    alchemyProvider({ apiKey: 'N4Mey8XJGiyn6qdLfuvKvejZmjzbGWpp'}),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;


//in your nextjs pages that trigger your smart contract calls, import this at the top:
  //import connectContract from "../utils/connectContract";
  //then when you want to call those functions:
  //const rsvpContract = connectContract();
  //const txn = await rsvpContract.youtFunction()