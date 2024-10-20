// components/NFTList.js
import React from 'react';

function NFTList({ title, nfts, onSend }) {
  return (
    <div className="nft-list">
      <h2>{title}</h2>
      <ul>
        {nfts.map((nft) => (
          <li key={nft.tokenId}>
            <h3>Token ID: {nft.tokenId}</h3>
            <p>IPFS Data: {nft.ipfsData}</p>
            <button onClick={() => onSend(nft.tokenId)}>Send NFT</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NFTList;