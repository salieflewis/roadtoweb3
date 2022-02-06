require('dotenv').config();
require('hardhat-deploy');
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.7.3",
  networks: {
    mumbai: {
      url: process.env.STAGING_ALCHEMY_API,
      accounts: [process.env.PRIVATE_KEY_MUMBAI],
    },
  },
};
