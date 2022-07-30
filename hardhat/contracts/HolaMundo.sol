//SPDX-License-Identifier: MIT
import "hardhat/console.sol";

pragma solidity ^0.8.4;

contract HolaMundo {
    string private nombre;

    constructor() {
        nombre = "Mundo";
    }

    function obtenerNombre() public view returns (string memory) {
        console.log("El nombre es '%s'", nombre);
        return nombre;
    }

    function cambiarNombre(string memory _nombre) public {
        console.log("Cambiando el nombre: '%s' -> '%s'", nombre, _nombre);
        nombre = _nombre;
    }
}
