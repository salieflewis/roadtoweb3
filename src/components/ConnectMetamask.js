// import { Button, Box, Stack, HStack, VStack } from "@chakra-ui/react";
// import { useState } from "react";
// // import detectEthereumProvider from "@metamask/detect-provider";
// import { ethers, providers } from "ethers";

// const provider = new ethers.providers.Web3Provider(window.ethereum)
// await provider.send("eth_requestAccounts", []);
// const signer = provider.getSigner()

// console.log(provider.getBlockNumber())

// const ConnectMetamask = () => {
//   // Define a state variable to store the status of if a wallet is connected
//   const [walletConnected, setWalletConnected] = useState(false);

//   // Function to be executed after clicking 'Connect Wallet'

//   const connectWallet = async () => {
//     const accounts = await window.ethereum.request({
//       method: "eth_requestAccounts",
//     });
//     setWalletConnected(true);
//   };

//   return (
//     <HStack>
//       <Button
//         m={4}
//         size="lg"
//         _hover={{ bg: "pink.100" }}
//         onClick={connectWallet}
//       >
//         Connect MetaMask
//       </Button>
//     </HStack>
//   );
// };

// export default ConnectMetamask;
