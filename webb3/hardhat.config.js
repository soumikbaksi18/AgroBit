/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNetwork: "mumbai",
    networks: {
      hardhat: {},
      mumbai: {
        url: "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78",
        accounts: [
          `0xcba50d8326a1072398f6283ac81ef57c4a39a9980c6582628c1d8f6401decb52`,
        ],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
