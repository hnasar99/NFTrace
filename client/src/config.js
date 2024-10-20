// src/config.js
export const AVALANCHE_FUJI_PARAMS = {
    chainId: '0xA869',
    chainName: 'Avalanche Fuji Testnet',
    nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18
    },
    rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://testnet.snowtrace.io/']
  };
  
  export const FACTORY_L1_ADDRESS = '0x15d561d3db70c0502af779b7ded2b7184b255d84e4f37f8b7be728069b0d93f3';  // Replace with actual address after deployment
  export const LOGISTICS_L1_ADDRESS = '0x15ff4a57201d9220741d902b92db6b190f931ecea9321a18a39dff4c92c3c76f';  // Replace with actual address after deployment
  export const CONSUMER_L1_ADDRESS = '0x132ba370c74d1b2cd5e2d85013f7ca1cdf80f8d1b04deaa6a34cc066bfbb0074';  // Replace with actual address after deployment
  
  export const IPFS_GATEWAY = 'https://ipfs.io/ipfs/';