require("@nomiclabs/hardhat-waffle");
const envs = require('./validate-envs')()

const networkConfig = require("./src/providers/config")
const networkToLoad = "testNet"
// const networkToLoad = "mainNet"
const config = networkConfig[networkToLoad]

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
    },
    [config.name]: {
      chainId: config.chainId,
      from: envs.ADDR,
      url: config.http,
      gasPrice: "auto",
      accounts: [envs.PK]
    },
  },
  solidity: {
    version: "0.7.3"
  },
  paths: {
    sources: './src/contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  }
}
