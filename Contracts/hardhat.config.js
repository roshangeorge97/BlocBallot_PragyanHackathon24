/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  defaultNetwork: "ganache",
  networks: {
      ganache: {
          url: "HTTP://127.0.0.1:7545",
          // accounts: [privateKey1, privateKey2, ...]
      },
      cosmv: {
        url: " https://rpc.cosvm.net",
        accounts: ['a705a34d0f1cb479211c8fbe220f50cbc0f965e2d47af254a522e4773fd47c31'],
        chainId:323,
    },
  },
  solidity: {
      version: "0.8.0",
  },
};
