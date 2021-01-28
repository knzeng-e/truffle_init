pragma solidity ^0.7.1;

contract MyTestContract {
    address public owner;

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Cette fonction ne peut etre appelee que par l'admin");
        _;
    }
}