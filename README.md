# 👋 Hola Mundo Web3 Starter Kit - (English/Español)

* A starter project to get you quickly setup for building your DApp on Ethereum and Polygon!
* ¡Un proyecto inicial para configurar rápidamente la creación de su DApp en Ethereum y Polygon!
* Este es un proyecto "multi-chain" compatible con las redes de prueba de goerli y mumbai, que pueden usar para el proximo hackathon. Espero que pueda ayudar. :)


* Stack Used: Typescript, Next.js, Tailwind CSS, Hardhat, Ethers.js, Rainbow Wallet, and WAGMI
* Networks: Goerli & Polygon Mumbai Testnets

# 🏄‍♂️ Quick Start

### Before you clone this project make sure you have the following installed on your machine (in this order): 
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

### Let's Get Building!
* First, fork this project by clicking the fork button in the upper right hand corner of the repo page.
* Second, open your terminal and run the following command with the correct inputs:

```bash
git clone https://github.com/<YOUR-USERNAME>/<YOUR-REPOSITORY-NAME>
```

> install all project 👷‍ dependencies by changing directories into the project folder and running `yarn install`:

```bash
cd <YOUR-PROJECT-NAME> 
yarn install
```

> open a another terminal window to start the 📱 frontend:

```bash
yarn dev
```

> 📱 Open http://localhost:3000 to see the app's front end!

<br/> 

# 🤓 Deploying Smart Contracts

### Set Enviornment Variables:
* Create a `.env` file inside of `hardhat/` by duplicating the `.env.example` file provided
* Replace the value of `MUMBAI_ALCHEMY_KEY = ***` & `GOERLI_ALCHEMY_KEY = ***` in `packages/hardhat/.env.example` with your api keys that you created earlier.
* Replace the value of `PRIVATE_KEY = xxx` with your account's private key
* Replace the value of `ETHERSCAN_KEY = xxx` with your etherscan api key

### Deploy To Goerli Test Network!

### Deploy To Mumbai Test Network!


# 🚧 Logistics

🔏 Edit your smart contract `HolaMundo.sol` in `hardhat/contracts/`

📝 Edit your frontend `index.tsx` in `next-app/pages/`

💼 Edit your deployment scripts `deploy.ts` in `hardhat/scripts/`

# 🤖 Useful Commands

# 🚀 Done Remixing? Deploy to Vercel!


<br/>

# 📚 Resources
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
