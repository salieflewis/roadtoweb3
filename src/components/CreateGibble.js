import { ETHAuth, Proof } from "@0xsequence/ethauth";
import { configureLogger } from "@0xsequence/utils";
import { sequence } from "0xsequence";
import ConnectSequence from "./ConnectSequence.tsx";

import { Button, Box, Heading, Text } from "@chakra-ui/react";
import { ethers } from "ethers";

const CreateGibble = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  // Address of deployed Captain.sol
  const captainAddress = "0xd188cDd9A0A74aBe6195bDA6e12c519FA78A0bDe";

  const captainAbi = ["function newConscript(string memory _initName)"];

  // Contract connected to the provider, read-only
  const captainContract = new ethers.Contract(
    captainAddress,
    captainAbi,
    signer
  );

  const newContractAddress = null;

  async function newConscript() {
    const conscriptTx = await captainContract.newConscript("firstdayout");

    // Wait for one block confirmation. The transaction has been mined at this point.
    const receipt = await conscriptTx.wait();
    // Get the events
    const events = receipt?.events; // # => Event[] | undefined
    //   console.log(events.slice(-1).address);
    const newConscriptAddress = events[0].address;
    // const newConscriptAddress = events;
    // console.log(newConscriptAddress)
    console.log(newConscriptAddress);
  }
  return (
    <>
      <Button size="lg" bg="gray.100" color="blue.500" onClick={newConscript}>
        Create your Gibble
      </Button>
      <Text>Here is your Gibble address:{}</Text>
    </>
  );
};

export default CreateGibble;
