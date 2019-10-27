pragma solidity >=0.4.0 <0.6.0;

contract SimpleStorage {
    uint256 balance;
    address public minter;

    constructor() public {
        balance = 100;
        minter = msg.sender;
    }

    function incrementBalance(uint256 x) public {
        balance += x;
    }

    function getBalance() public view returns (uint256) {
        return balance;
    }

    function isMinter(address addr) public view returns (bool) {
        return addr == minter;
    }
}