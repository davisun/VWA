require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {}, // Local Hardhat network
    goerli: {
        url: `https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`, // Replace with Infura/Alchemy URL
        accounts: [`0x${process.env.PRIVATE_KEY}`], // Replace with your wallet private key
    },
  },
};
