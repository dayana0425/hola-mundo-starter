# Welcome to the smart contract development side of this this project!
# ¡Bienvenido al lado del desarrollo de contratos inteligentes de este proyecto!
### Vamos a usar hardhat para nuestro desarollo de smart contracts
### Que es hardhat? 
> Hardhat es un entorno de desarrollo para el software Ethereum. 
> Consta de diferentes componentes para editar, compilar, depurar e implementar sus contratos inteligentes y dApps, todos los cuales trabajan juntos para crear un entorno de desarrollo completo.
# Commands - You can view the scripts for these commands in package.json
# Comandos - Puedes ver los scripts para estos comandos en package.json
```
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
# Realmente solo necesitarás usar estos comandos:

```
yarn compile
yarn deploy-goerli
yarn deploy-mumbai

```

# Si necessitas ayuda:
```
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
