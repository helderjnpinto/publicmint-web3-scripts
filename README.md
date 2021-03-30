# publicmint-web3-scripts

Scripts using only web3

## setup

npm install

configure .env.example to .env setting private key 'PK' and from address 'ADDR'

### Get USD balances

- Native balance
node ./src/getBalance.js

- ERC20 USD balance
node ./src/getBalanceERC20.js

### Native transfer

node ./src/transfer.js

### Public mint intrinsic gas

The minimum amount of gas in normal ethereum network is 21000 in public mint is 25000
If you use metamask you need to change default values.
e

### Compile

Executing npm scripts:

- yarn compile

Or directly hardhat:

npx hardhat compile

### Test

Executing npm scripts:

- yarn test:hd

Or directly hardhat:

npx hardhat test --network hardhat

### Deploy

Using hardhat node:

- yarn deploy:hd

Using testNet:

- yarn deploy:testNet

Or directly hardhat:

- npx hardhat run --network testNet ./scripts/1_migration.js

> ! Note: for mainNet configure manually hardhat-config variable `networkToLoad` to `mainNet`
