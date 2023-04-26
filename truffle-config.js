const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require('fs');
const homedir = require('os').homedir();
const mnemonic = fs.readFileSync(homedir + "/.dev_seeds/testnet").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    sepolia: {
      provider: function() { 
        return new HDWalletProvider(mnemonic, "https://sepolia.infura.io/v3/2d907fb6564d494585bbcd668f253c73");
      },
      network_id: "11155111",
    }
  }
};