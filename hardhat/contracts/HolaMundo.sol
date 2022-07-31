//SPDX-License-Identifier: MIT
import "hardhat/console.sol"; 

// ESP: establecer la versión del compilador
// EN: setting the compiler version
pragma solidity ^0.8.4;

contract HolaMundo {
    // ESP: variable de estado - nombre
    // EN: state variable - name
    string private nombre;

    // ESP: cuando se crea una instancia del contrato, el variable de estado se inicializa a una cadena vacía
    // EN: when a contract instance is created, the state variable is initialized to an empty string
    constructor() {
        nombre = "";
    }

    // ESP: obtenerNomber función
    // EN: getName function
    function obtenerNombre() public view returns (string memory) {
        console.log("El nombre es '%s'", nombre);
        return nombre;
    }

    // ESP: cambiarNombre función
    // EN: setName function
    function cambiarNombre(string memory _nombre) public {
        console.log("Cambiando el nombre: '%s' -> '%s'", nombre, _nombre);
        nombre = _nombre;
    }
}
