// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

// import "./Conscript.sol";

contract Captain {

    address private owner;
  
    constructor() payable {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    Conscript[] public conscripts;

    function newConscript(string memory _initName) external onlyOwner {
        Conscript conscript = new Conscript(_initName, address(this));
        conscripts.push(conscript);
    }
}

contract Conscript {

    string public initName;
    address public owner;

    constructor (string memory _initName, address _owner) {
        initName = _initName;
        owner = _owner;
    }

    modifier onlyCaptain() {
        require(msg.sender == owner);
        _;
    }

    // Enables the contract to receive ether
    function receiveDonation(uint256 amount) public payable {
        require (msg.value == amount);
    }

    // Returns the ether balance of the contract
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}