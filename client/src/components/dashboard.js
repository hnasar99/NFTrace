// components/Dashboard.js
import React, { useState, useEffect } from 'react';
import NFTList from './NFTList';

function Dashboard({ factoryL1, logisticsL1, consumerL1, provider, signer }) {
const [factoryNFTs, setFactoryNFTs] = useState([]);
const [logisticsNFTs, setLogisticsNFTs] = useState([]);
const [consumerNFTs, setConsumerNFTs] = useState([]);

useEffect(() => {
if (factoryL1 && logisticsL1 && consumerL1) {
  fetchNFTs();
}
}, [factoryL1, logisticsL1, consumerL1]);

async function fetchNFTs() {
// Implement fetching NFTs from each L1
// This is a placeholder and needs to be implemented based on your contract methods
const factoryNFTs = await factoryL1.getAllNFTs();
const logisticsNFTs = await logisticsL1.getAllNFTs();
const consumerNFTs = await consumerL1.getAllNFTs();

setFactoryNFTs(factoryNFTs);
setLogisticsNFTs(logisticsNFTs);
setConsumerNFTs(consumerNFTs);
}

async function sendNFT(from, to, tokenId) {
// Implement sending NFT between L1s
// This is a placeholder and needs to be implemented based on your contract methods
try {
  const tx = await from.sendNFT(to.address, tokenId);
    await tx.wait();
      fetchNFTs();  // Refresh NFT lists after transfer
    } catch (error) {
      console.error("Failed to send NFT:", error);
    }
  }

  return (
    <div className="dashboard">
      <h1>Avalanche Blockchain Dashboard</h1>
      <div className="l1-container">
        <NFTList title="Factory L1" nfts={factoryNFTs} onSend={(tokenId) => sendNFT(factoryL1, logisticsL1, tokenId)} />
        <NFTList title="Logistics L1" nfts={logisticsNFTs} onSend={(tokenId) => sendNFT(logisticsL1, consumerL1, tokenId)} />
        <NFTList title="Consumer L1" nfts={consumerNFTs} onSend={(tokenId) => sendNFT(consumerL1, factoryL1, tokenId)} />
      </div>
    </div>
  );
}

export default Dashboard;