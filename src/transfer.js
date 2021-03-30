const web3 = require("./providers/httpProvider")();
const networkConfig = require("./providers/config")
const explorerURL = networkConfig['testNet'].explorer
const envs = require('../validate-envs')()

// add pk to wallet
const privateKey = envs.PK
const fromAddress = envs.ADDR

web3.eth.accounts.wallet.add(privateKey);

var transactionObject = {
    from: fromAddress,
    to: "0xe1650dD7C9Aef65264341d2c16f0C9D3348723bb",
    value: '1000000000',
    gas: '25000',
    gasPrice: 2000000000000,
};


web3.eth.sendTransaction(transactionObject).then(receipt => {
    console.log("Receipt:", receipt)
    console.log("Explorer link: ", getExplorerTx(receipt.transactionHash))
});


const getExplorerTx = (txHash) => {
    return `${explorerURL}tx/${txHash}`;
}
