# 👋 Hola Mundo Web3 Starter Kit

A starter project to get you quickly setup for building your DApp on Ethereum and Polygon!

* Stack Used: Typescript, Next.js, Tailwind CSS, Hardhat, Ethers.js, Rainbow Wallet, and WAGMI
* Networks: Goerli & Polygon Mumbai

# 🏄‍♂️ Quick Start

### Before you fork/clone this project make sure you have the following installed on your machine (in this order): 
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install/)
* [Git](https://git-scm.com/downloads)

### Create a Burner Wallet, Alchemy Account, and Etherscan Account:
* [Metamask](https://metamask.io/) (IMPORTANT: It is recommended you create a burner wallet to be used for development only, avoid using your regular metamask wallet!)
* [Alchemy](https://www.alchemy.com/): After signing up, generate an api key for goerli & mumbai!
* [Etherscan](https://etherscan.io/apis): After signing up, generate an api key!

### Fund Your Account(s):
* [Georli Faucet](https://goerlifaucet.com/)
* [Polygon Faucet (Mumbai Network)](https://faucet.polygon.technology/)

### Now you're ready to fork/clone this starter kit and get building!:
* First, fork this project by clicking the fork button in the upper right hand corner of the repo page.
* Second, open your terminal and run the following command with the correct inputs:

```bash
git clone https://github.com/<YOUR-USERNAME>/<YOUR-REPOSITORY-NAME>
```

> install all project 👷‍ dependencies by navigating inside your project folder and running:

```bash
cd <YOUR-PROJECT-NAME>
yarn install
```

> open a another terminal window to start the 📱 frontend:

```bash
yarn dev
```

### Set Enviornment Variables Before Deploy Your Smart Contracts:
* Create a `.env` file inside of `hardhat/` by duplicating the `.env.example` file provided
* Replace the value of `MUMBAI_ALCHEMY_KEY = ***` & `GOERLI_ALCHEMY_KEY = ***` in `packages/hardhat/.env.example` with your api keys that you created earlier.
* Replace the value of `PRIVATE_KEY = xxx` with your account's private key
* Replace the value of `ETHERSCAN_KEY = xxx` with your etherscan api key


### Deploy To Goerli Test Network!


### Deploy To Mumbai Test Network!


<br/>

🔏 Edit your smart contract `HolaMundo.sol` in `hardhat/contracts/`

📝 Edit your frontend starting at `index.tsx` in `next-app/pages/`

💼 Edit your deployment scripts `deploy.ts` in `hardhat/scripts/`

📱 Open http://localhost:3000 to see the app's front end!

🌍 You need an RPC key for testnets and production deployments, create an [Alchemy](https://www.alchemy.com/) account and replace the value of `ALCHEMY_KEY = xxx` in `packages/hardhat/.env` with your new key.

<br/>

# 📚 Learn More
Solidity: https://docs.soliditylang.org/en/v0.8.15/
<br/>
Next.js: https://nextjs.org/docs
<br/>
Tailwind CSS: https://tailwindcss.com/docs/installation
<br/>
Hardhat: https://hardhat.org/getting-started/
<br/>
Ethers.js: https://docs.ethers.io/v5/
<br/>
Rainbow Kit: https://www.rainbowkit.com/docs/introduction 
<br/>
Wagmi: https://wagmi.sh/docs/getting-started
