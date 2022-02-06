// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

// import "./Conscript.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Captain {

address private owner;
  
constructor() payable {
owner = msg.sender;
}

event newConscriptLog(address newConscript);

modifier onlyOwner() {
 require(msg.sender == owner);
 _;
}

Conscript[] public conscripts;

function newConscript(string memory _initName) external onlyOwner {

Conscript conscript = new Conscript(_initName, address(this));
//conscripts.push(conscript);
//**Events emitted wihin functions**
emit newConscriptLog(address(conscript));
}

//**JS CODE 4 LISTENING TO EVENTS & UPDATING UI**
//contract = web3.eth.contract(abi).at(address);
//contract.newConscriptLog(function (err, result) {
//if (err) {
//return error(err);
//}

//log("New Address:" + result.args.newConscript);
//getNewConscript(_initName);
//});

//getCount();

}

contract Conscript {

string public initName;
address public newConscript;

constructor (string memory _initName, address _newConscript){
initName = _initName;
newConscript = _newConscript;
}

modifier onlyCaptain() {
require(msg.sender == newConscript);
_;
}

// Enables the contract to receive ether
function receiveDonation(uint256 amount) public payable {
}

// Returns the ether balance of the contract
function getBalance() public view returns (uint256) {
return address(this).balance;
}

}

contract BalanceInUSD {

AggregatorV3Interface internal priceFeed;

    /**
     * Network: Kovan
     * Aggregator: ETH/USD
     * Address: 0x9326BFA02ADD2366b30bacB125260Af641031331
     */
constructor() {
priceFeed = AggregatorV3Interface(address(0x9326BFA02ADD2366b30bacB125260Af641031331));
}

function getThePrice() public view returns (int) {
(
    , 
    int price,
    ,
    ,
    
) = priceFeed.latestRoundData();
return (price / 10**8);
}
    
uint current_price = uint(getThePrice());

}