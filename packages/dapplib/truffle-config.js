require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note meadow unusual install case equal general'; 
let testAccounts = [
"0x704346b0ab598c105145d55bd5dcaa43df510c48d910c065fdf2fb0c2e9d3143",
"0x07ea1050da848644a3ab0968440258e84c485081572a159630cbe76bd116324a",
"0x95909f1ec7c95b4e7e9e1d7193b24f131e31c915269afc990731e2f3e4b73967",
"0x5e17dc7282217948164efac1c2bc2bb5e3cb9991095a1151af5d248d14694b5a",
"0x3c5f036aacf627871ad4f5ef6dbf851968aa9445e7c421c0bdaedda0a5577de8",
"0xf9b730c6825c8c5a401405a14ab97f62730c6fd541013f4a8f1e0a9b63918be3",
"0x86acec652c099e687c30748ef10b92c7dac287d4a32c783593783c8fb3ead63d",
"0x4bc425522bd55558d97e0b26207d942790386f5b2eb151dea7738b92d1a3becb",
"0x02f6aecb315dcec9f7bb9711c192aa63d66f37af2aa645d7d51c665bb98dd547",
"0xf2bb77e4ef5d7f26723f392ce3c340b9feb4a4ccbd32be3a2c05349d6cce7e2a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


