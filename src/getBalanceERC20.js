const web3 = require("./providers/httpProvider")();
const { USD }= require("./constants").contracts;
const jsonInterface = require("./abi/IERC20.json");

var _USD = new web3.eth.Contract(jsonInterface, USD);

_USD.methods.balanceOf("0xe1650dD7C9Aef65264341d2c16f0C9D3348723bb").call().then(console.log)
