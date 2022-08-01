# Welcome to the Front-End of our DApp!
# ¡Bienvenido al Front-End de nuestra DApp!
> Este es un Next.js App que usa Typescript y Tailwind CSS
> Tambien se usa Wagmi para poder interactuar con los smart contracts desde el Front-end

# Folder Information
### pages/
* index.tsx - todo comienza aquí
* _app.tsx - aqui configuramos Wagmi para poder usar 
* Components/Spinner.tsx - esta es una animación que usamos para cuando estamos esperando una respuesta del blockchain, no es necessario y lo puedes cambiar a otra diferent animación
### styles/
* aqui puedes configura los estilos para tus componentes usando Tailwind CSS
### utils/
* ABI/ - aqui se guarda el ABI cada vez que usas el comando `deploy-mumbai` o `delpoy-goerli` 
* ContractAddresses - aqui se guarda las las direcciones de tus contractos cade vez que desplegas un contracto cuando usas los comandos `deploy-mumbai` o `delpoy-goerli` 

# EJECUTAR EL FRONT-END EN SU ENTORNO LOCAL
```
yarn dev
```

# Tambien puedes usar estos comandos - puedes fijarte en package.json los scripts
```
yarn build
yarn start
yarn lint

```