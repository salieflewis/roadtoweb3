import { ETHAuth, Proof } from "@0xsequence/ethauth";
import { configureLogger } from "@0xsequence/utils";
import { sequence } from "0xsequence";
import { Button, Box } from "@chakra-ui/react";

const ConnectSequence = () => {
  const network = "mumbai";
  const wallet = new sequence.Wallet(network);

  const connect = async (authorize: boolean = false) => {
    const connectDetails = await wallet.connect({
      app: "Gibble",
      authorize,
    });

    console.warn("connectDetails", { connectDetails });

    if (authorize) {
      const ethAuth = new ETHAuth();

      if (connectDetails.proof) {
        const decodedProof = await ethAuth.decodeProof(
          connectDetails.proof.proofString,
          true
        );
        console.warn({ decodedProof });

        const isValid = await wallet.utils.isValidTypedDataSignature(
          await wallet.getAddress(),
          connectDetails.proof.typedData,
          decodedProof.signature,
          await wallet.getAuthChainId()
        );
        console.log("isValid?", isValid);
        if (!isValid) throw new Error("sig invalid");
      }
    }
  };
  return (
    <Box p={4}>
      <Button bg="gray.100" color="blue.500" p={4} alignSelf="flex-end" onClick={() => connect()}>Connect Wallet</Button>
    </Box>
  );
};

export default ConnectSequence;
