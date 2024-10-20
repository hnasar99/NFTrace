// App.js
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import Dashboard from './components/dashboard';
import Login from './components/login';
import { FACTORY_L1_ADDRESS, LOGISTICS_L1_ADDRESS, CONSUMER_L1_ADDRESS } from './config';
import ABIs from './contracts/abis';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [factoryL1Contract, setFactoryL1Contract] = useState(null);
  const [logisticsL1Contract, setLogisticsL1Contract] = useState(null);
  const [consumerL1Contract, setConsumerL1Contract] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      initializeBlockchain();
    }
  }, [isLoggedIn]);

  async function initializeBlockchain() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        setProvider(provider);
        setSigner(signer);

        const factoryL1Contract = new ethers.Contract(FACTORY_L1_ADDRESS, ABIs.factoryL1ABI, signer);
        const logisticsL1Contract = new ethers.Contract(LOGISTICS_L1_ADDRESS, ABIs.logisticsL1ABI, signer);
        const consumerL1Contract = new ethers.Contract(CONSUMER_L1_ADDRESS, ABIs.consumerL1ABI, signer);

        setFactoryL1Contract(factoryL1Contract);
        setLogisticsL1Contract(logisticsL1Contract);
        setConsumerL1Contract(consumerL1Contract);
      } catch (error) {
        console.error("Failed to initialize blockchain:", error);
      }
    } else {
      console.log('Please install MetaMask!');
    }
  }

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Dashboard
          factoryL1={factoryL1Contract}
          logisticsL1={logisticsL1Contract}
          consumerL1={consumerL1Contract}
          provider={provider}
          signer={signer}
        />
      )}
    </div>
  );
}

export default App;