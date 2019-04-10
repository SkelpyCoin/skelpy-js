/** @module networks */

module.exports = {
  /** @type {Network} */
  skelpy: {
    messagePrefix: '\x18skelpy Signed Message:\n',
    bip32: {
      public: 0x2bf4968, // base58 will have a prefix 'apub'
      private: 0x2bf4530 // base58Priv will have a prefix 'apriv'
    },
    name: 'mainnet',
    nethash: 'f24b53b1617ba362b419a64861afcec1b066d2798e77571b5cdb91303530d412',
    token: 'SKELPY',
    symbol: 'Ƨ',
    pubKeyHash: 0x17,
    explorer: 'http://explorer.skelpy.co',
    wif: 0xaa, // Network prefix for wif generation
    activePeer: {
      ip: '51.75.27.22',
      port: 4001
    },
    peers: [
      { ip: "51.75.27.22", port: 4001 }
    ],
  },
  /** @type {Network} */
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    wif: 0x80
  }
}
