// src/TransactionInfo.js
import React, { useState } from 'react';
import { getTransactionInfo } from './BitcoinService';
import './App.css';

const TransactionInfo = () => {
    const [txid, setTxid] = useState('');
    const [txInfo, setTxInfo] = useState(null);

    const fetchTransactionInfo = async () => {
        try {
            const info = await getTransactionInfo(txid);
            setTxInfo(info);
        } catch (error) {
            console.error('Error fetching transaction info:', error);
        }
    };

    return (
        <div className="container">
            <div className="input-container">
            <input
                type="text"
                value={txid}
                onChange={(e) => setTxid(e.target.value)}
                placeholder="Enter Transaction ID (txid)"
            />
            <button onClick={fetchTransactionInfo}>Fetch Transaction Info</button>
            </div>
            {txInfo && (
                <div className="result-container">
                    <h2>Transaction Information</h2>
                    <pre>{JSON.stringify(txInfo, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default TransactionInfo;
