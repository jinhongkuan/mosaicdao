export {};
// import Web3 from "web3";

// export const getWeb3 = async () => {
//   // Modern dapp browsers...
//   if (window.ethereum) {
//     const web3 = new Web3(window.ethereum);
//     try {
//       // Request account access if needed
//       await window.ethereum.enable();
//       // Accounts now exposed
//       return web3;
//     } catch (error) {
//       throw Error(error);
//     }
//   }
//   // Legacy dapp browsers...
//   else if (window.web3) {
//     // Use Mist/MetaMask's provider.
//     const web3 = window.web3;
//     console.log("Injected web3 detected.");
//     return web3;
//   } else {
//     const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
//     const web3 = new Web3(provider);
//     console.log("No web3 instance injected, using Local web3.");
//     return web3;
//   }
// };

// export const switchToMumbai = async () => {
//   let switchToMumbai = [
//     {
//       chainId: "0x13881",
//       chainName: "Mumbai Testnet",
//       rpcUrls: ["https://rpc-mumbai.matic.today"],
//       nativeCurrency: {
//         name: "MATIC",
//         symbol: "MATIC",
//         decimals: 18,
//       },
//     },
//   ];
//   // Modern dapp browsers...
//   if (window.ethereum) {
//     try {
//       console.log("switch to MATIC blockchain");
//       window.ethereum
//         .request({
//           method: "wallet_addEthereumChain",
//           params: switchToMumbai,
//         })
//         .catch((error) => console.log(error.message));
//       console.log("finished switching to MATIC (POLYGON)");
//     } catch (error) {
//       alert("Failed to switch to MATIC");
//     }
//   }
// };
