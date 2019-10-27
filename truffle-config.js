var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "Xc2C3UVlsCVv2WR1fQpB";
var mnemonic = "neither scale element pave joke satoshi confirm cactus manual brave answer tobacco";

module.exports = {
  networks: {
    development: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
      network_id: 3,
      endpoint: "127.0.0.1:19110",
      from: "b1iH6rDq4N5KYGyGzkqzA45UXAjfxQux7xE",
      privateKey: "0fb5104cbf4814dbd5ae3855d6168ceb255f079b9a86bfcd56b965d9d478441b",
    }
  }
};
