/**
 * Providers configuration file
 * @namespace ProviderConfiguration 
 * @property {number}  chainId       - Chain identifier of blockchain
 * @property {string}  name          - Name of blockchain.
 * @property {string}  http          - URL for json rpc with http protocol.
 * @property {string}  ws            - URL for json rpc with websocket protocol (Used for events).
 * @property {number}  explorer      - Explorer url.
 */
module.exports = {
    chainId: 2020,
    name: 'mainNet',
    http: 'https://rpc.publicmint.io:8545/',
    ws: 'wss://rpc.publicmint.io:8546/',
    explorer: 'https://explorer.publicmint.io/'
}
