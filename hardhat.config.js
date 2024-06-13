require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.25",
  networks: {
    sepolia: {
      url: process.env.INFURA_URL,
      accounts: [
        process.env.PRIVATE_KEY
      ]
    }
  }
};