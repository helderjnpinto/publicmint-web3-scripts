const Web3 = require('web3');
const networkConfig = require('./config')

module.exports = (networkName = "testNet") => {
    const providerURL = networkConfig[networkName].ws
    return new Web3(providerURL)
}
