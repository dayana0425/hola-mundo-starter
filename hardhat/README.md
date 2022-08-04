* [Clic para Español 🌈](#spanish)
* [Click for English 🌈](#english)
---
## <a name="spanish">Español 🌈</a>
# 👋 ¡Bienvenidx a la sección de desarrollo de smart contracts de este proyecto!

### Vamos a usar hardhat para nuestro desarollo de smart contracts

### Que es hardhat? 
> Hardhat es un entorno de desarrollo para el software Ethereum. 
> Consta de diferentes componentes para editar, compilar, depurar e implementar sus contratos inteligentes y dApps, todos trabajan juntos para crear un entorno de desarrollo completo. Hardhat Docs: https://hardhat.org/docs
---

### Establecer variables de entorno
* IMPORTANTE: configura primero las variables de entorno antes de ejecutar los comandos.
* Crea un archivo `.env` dentro de `hardhat/` duplicando el archivo `.env.example` provisto.
* Sustituye los valores de las variables con las claves api/urls api/claves privadas de las cuentas que creaste en Metamask/Alchemy/Etherscan y que utilizarás para el desarrollo web3.

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
# Realmente sólo necesitarás utilizar estos comandos:

```bash
yarn compile
yarn deploy-goerli
yarn deploy-mumbai # In my experience, deploying to mumbai takes about 10 minutes to 2 hours.
```

# Si necessitas ayuda o más informacion de los comandos disponibles:
```bash
yarn hardhat help
```
---

# Información de la carpeta `hardhat/`
### contracts/
* ¡Almacena todos tus archivos de Solidity aquí!
* Ejemplo de archivo Solidity: HolaMundo.sol
* ¡Agrega más archivos de Solidity según lo necesite tu proyecto!

### scripts/
* deployGeneral.ts - script para desplegar en general
* deployGoerli.ts - script para desplegar a Goerli testnet
* deployMumbai.ts - script para desplegar a Polygon Mumbai testnet
* ¡Agregua más scripts para probar tus smart contracts y desplegar a las testnets!
---

# Antes de desplegar tus smart contracts, tienes que compilar:
```
yarn compile
```
# Luego puedes deplegar a Goerli testnet:
```
yarn deploy-goerli
```
# Y deplegar a Polygon Mumbai testnet:
```
yarn deploy-mumbai
```
---

## <a name="english">English 🌈</a>
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

# Folder Information
### contracts/
* Store all your solidity files here!
* Example Solidity File: HolaMundo.sol
* Add more Solidity files as need by your project!

### scripts/
* deployGeneral.ts - script for deploying in general
* deployGoerli.ts - script for deploying to Goerli testnet
* deployMumbai.ts - script for deploying to Polygon Mumbai testnet
* Feel free to add more scripts for testing your smart contracts!

---

# Before deploying your smart contracts, you have to compile:
```
yarn compile
```
# Then you can deploy to Goerli testnet:
```
yarn deploy-goerli
```
# And deploy to Polygon Mumbai testnet:
```
yarn deploy-mumbai
```
---
