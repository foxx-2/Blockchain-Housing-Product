var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "kind journey jazz arrange retire bracket liar mixture twin void worry peasant";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "HTTP://127.0.0.1:7545", 0, 50);
      },
      network_id: '*',
      gas: 9999999,
      websockets: true
    },
    development_cli: {
        host: "127.0.0.1",
        port: 8545,
        network_id: "*",
        websockets: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.2",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}
