# publicmint-web3-scripts

Scripts using only web3

## setup

npm install

### Get USD balances

- Native balance
node ./src/getBalance.js

- ERC20 USD balance
node ./src/getBalanceERC20.js

### Native transfer

> ! update hardcoded pk and respective address in tranfer.js file

```js
const privateKey = '0x0'
const fromAddress = '0x0' 
```

node ./src/transfer.js

### Public mint intrinsic gas

The minimum amount of gas in normal ethereum network is 21000 in public mint is 25000
If you use metamask you need to change default values.
e
