*The first section is in Español 🌈! Scroll down for English 🌈!*

## Español 🌈
# 👋 ¡Bienvenido al lado del desarrollo de smart contracts de este proyecto!

### Vamos a usar hardhat para nuestro desarollo de smart contracts

### Que es hardhat? 
> Hardhat es un entorno de desarrollo para el software Ethereum. 
> Consta de diferentes componentes para editar, compilar, depurar e implementar sus contratos inteligentes y dApps, todos los cuales trabajan juntos para crear un entorno de desarrollo completo. Hardhat Docs: https://hardhat.org/docs
---

### Establecer Variables De Entorno
* IMPORTANTE: configure primero las variables de entorno antes de ejecutar los comandos.
* Cree un archivo `.env` dentro de `hardhat/` duplicando el archivo `.env.example` provisto.
* Reemplace los valores de las variables con las claves api/urls api/claves privadas de las cuentas que creó en Metamask/Alchemy/Etherscan y que utilizará para el desarrollo web3.

---
# Comandos - Puedes ver los scripts para estos comandos en `package.json`

```bash
yarn chain
yarn fork
yarn test
yarn compile
yarn deploy-goerli
yarn deploy-mumbai
yarn verify
yarn accounts
yarn hello
```
# Realmente solo necesitarás usar estos comandos:

```bash
yarn compile
yarn deploy-goerli
yarn deploy-mumbai
```

# Si necessitas ayuda o mas informacion sobre los comandos disponibles:
```bash
yarn hardhat help
```

# Folder Information
### contracts/
* Store all your solidity files here 
* Almacene todos sus archivos de solidez aquí
* HolaMundo.sol

### scripts/
* deployGeneral.ts - script para lanzar general
* deployGoerli.ts - script para lanzar al testnet Goerli 
* deployMumbai.ts - script para lanzar al testnet Mumbai

# Antes de lanzar/desplegar, compilar los smart contracts!
```
yarn compile
```
# Lanzar/desplegar al testnet goerli
```
yarn deploy-goerli
```
# Lanzar/desplegar al testnet mumbai
```
yarn deploy-mumbai
```

## English 🌈
# 👋 Welcome to the smart contract development side of this this project!

### Set Enviornment Variables
* IMPORTANT: Set enviornment variables first!
* Create a `.env` file inside of `hardhat/` by duplicating the provided `.env.example` file.
* Replace the variable values with the api keys/api urls/private keys from the accounts you made on Metamask/Alchemy/Etherscan and that you'll be utilizing for web3 development. 

---
# Commands - You can view the scripts for these commands in `package.json`
```bash
yarn chain
yarn fork
yarn test
yarn compile
yarn deploy-goerli
yarn deploy-mumbai
yarn verify
yarn accounts
yarn hello
```
# You'll only really need to use these commands:

```bash
yarn compile
yarn deploy-goerli
yarn deploy-mumbai
```
