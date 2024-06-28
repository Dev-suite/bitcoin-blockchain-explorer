// src/BlockInfo.js
import React, { useState } from 'react';
import { getBlockInfo } from './BitcoinService';
import './App.css';

const BlockInfo = () => {
    const [blockHash, setBlockHash] = useState('');
    const [blockInfo, setBlockInfo] = useState(null);

    const fetchBlockInfo = async () => {
        try {
            const info = await getBlockInfo(blockHash);
            setBlockInfo(info);
        } catch (error) {
            console.error('Error fetching block info:', error);
        }
    };

    return (
        <div className="container">
            <div className="input-container">
                <input
                    type="text"
                    value={blockHash}
                    onChange={(e) => setBlockHash(e.target.value)}
                    placeholder="Enter Block Hash"
                />
                <button onClick={fetchBlockInfo}>Fetch Block Info</button>
            </div>
            {blockInfo && (
                <div className="result-container">
                    <h2>Block Information</h2>
                    <pre>{JSON.stringify(blockInfo, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default BlockInfo;
