const web3 = require("./providers/httpProvider")();

web3.eth.getBalance("0xe1650dD7C9Aef65264341d2c16f0C9D3348723bb")
.then(console.log);
