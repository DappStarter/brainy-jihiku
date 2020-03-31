require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name release pizza artwork hidden praise army gesture'; 
let testAccounts = [
"0x75c49cd1d7e1a8703b1d072ece9eb28efc0c5ca028695a25a16692c438c77830",
"0x2741cb67cbc379356f41d58c7d74d7688005c5e97081f234b1561c771d4620d1",
"0x0f160d850b29ea930b132a9cc347d4e250aa09a04a126ae26361d4f468536465",
"0xbd8c9cb77b09d4339192759d39be67c427916fdbc2f851d1aab0159aafd7e4db",
"0x60d83c46f3ff2f317a83b326ac44f3e7dd83400d3df149d41295cea12a28563d",
"0xf94c8f349fd25d69473446f5716fdad8baa65a561526b498348d892ece441101",
"0x82e94a2256613ff09e9cedde4bba6ffc284d689c6410933505493190c63f0088",
"0x05b93321795b5f7056b78caf24bed966ee9b06136aaf695a5da84a819e868314",
"0x9e6a62d1b2f0767dff2b63ff2ed05355678c074053f13fe473944a89130c6a21",
"0xd30ed9de8eb52b2250890fe386bfd95cfed821adb1737fbfe18cd262a0f3396c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
