import { ETHAuth, Proof } from "@0xsequence/ethauth";
import { configureLogger } from "@0xsequence/utils";
import { sequence } from "0xsequence";
import ConnectSequence from "./ConnectSequence.tsx";

import { Button, Box, Heading } from "@chakra-ui/react";
import { ethers } from "ethers";

console.log(network)

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// Address of deployed Captain.sol
const captainAddress = "0x1A219a24Ac6D2dcD4ccDEa8F34e19ea872fB4078";

const captainAbi = ["function newConscript(string memory _initName)"];

// Contract connected to the provider, read-only
const captainContract = new ethers.Contract(captainAddress, captainAbi, signer);

const newContractAddress = null;

async function newConscript() {
  const conscriptTx = await captainContract.newConscript("firstdayout");
  await conscriptTx.wait();
  console.log("solidity event goes here");
}

const CreateGibble = () => {
  return (
    <Button size="lg" bg="gray.100" color="blue.500" onClick={newConscript}>
      Create Gibble Initiative
    </Button>
  );
};

export default CreateGibble;
