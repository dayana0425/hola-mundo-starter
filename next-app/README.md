* [Clic para Español 🌈](#spanish)
* [Click for English 🌈](#english)
---
## <a name="spanish">Español 🌈</a>
# 👋 ¡Bienvenidx al Front-End de nuestra DApp!
* Este es un Next.js App que usa Typescript y Tailwind CSS.
* También se utiliza WAGMI, una herramienta para poder interactuar con smart contracts desde el Front-end proporcionando React Hooks para Ethereum.
---
# Información De La Carpeta `/next-app`
### pages/
* **index.tsx** - todo comienza aquí
* **_app.tsx** - aquí configuramos WAGMI para poder utilizarlo en toda la app 
* **Components/Spinner.tsx** - esta es una animación que mostramos mientras esperamos una respuesta de la blockchain, no es necessario pero es `cool` y lo puedes cambiar por otra animación diferente si quieres. 
### styles/
* aquí puedes configurar los estilos para tus componentes usando Tailwind CSS
### utils/ABI/
* aquí se guarda el ABI cada vez que usas el comando `deploy-mumbai` o `deploy-goerli` dentro del folder `hardhat/`
### utils/ContractAddresses 
* aquí se guardan todas las direcciones de tus contratos cade vez que desplegas un contracto a la blockchain cuando usas los comandos `deploy-mumbai` o `deploy-goerli` dentro del folder `hardhat/`
---
# Ejecutar frontend en host local
> Abre otra ventana de la terminal para iniciar la 📱 interfaz/front-end (asegúrate de estar dentro de la carpeta `/next-app`):

```bash
yarn dev
```

> Abre http://localhost:3000 para ver la interfaz de la aplicación!

# También puedes usar estos comandos - puedes fijarte en `package.json` - para ver los scripts
```
yarn build
yarn start
yarn lint 
```
---

## <a name="english">English 🌈</a>
# 👋 Welcome to the Front-End of our DApp!
* This is a Next.js App that uses Typescript and Tailwind CSS.
* WAGMI is also used, which is a tool, to be able to interact with smart contracts from the Front-end by providing React Hooks for Ethereum.

---
# Folder Information `/next-app`
### pages/
* **index.tsx** - all app rendering starts here
* **_app.tsx** - here we configure WAGMI to be able to use throughout our app
* **Components/Spinner.tsx** - this is an animation we use for when we're waiting for a response from the blockchain, it's not necessary but it's `cool` and you can change it to a different animation if you want.
### styles/
* here you can set the styles for your components using Tailwind CSS
### utils/ABI/
* this is where the ABI is saved every time you use the `deploy-mumbai` or `deploy-goerli` command inside the `hardhat/`do Tailwind CSS folder
### utils/ContractAddresses
* this is where all your contract addresses are stored each time you deploy a contract to the blockchain when you use the `deploy-mumbai` or `deploy-goerli` commands inside the `hardhat/` folder.
---
# Run frontend on local host
> Open another terminal window to launch the 📱 front-end (make sure you're inside the `/next-app` folder):

```bash
yarn dev
```

> Open http://localhost:3000 to see the application front-end/interface!

# You can also use these commands - you can look at `package.json` to checkout the scripts
```
yarn build
yarn start
yarn lint 
```
