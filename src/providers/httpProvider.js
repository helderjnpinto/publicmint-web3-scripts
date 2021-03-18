const Web3 = require('web3');
const networkConfig = require('./config')

module.exports = (networkName = "testNet") => {
    const providerURL = networkConfig[networkName].http
    return new Web3(providerURL)
}
