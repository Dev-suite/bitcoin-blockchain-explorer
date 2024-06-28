// src/AccountInfo.js
import React, { useState } from 'react';
import { getAccountInfo } from './BitcoinService';

const AccountInfo = () => {
    const [address, setAddress] = useState('');
    const [accountInfo, setAccountInfo] = useState(null);

    const fetchAccountInfo = async () => {
        try {
            const info = await getAccountInfo(address);
            setAccountInfo(info);
        } catch (error) {
            console.error('Error fetching account info:', error);
        }
    };

    return (
        <div className="container">
            <div className="input-container">
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Bitcoin Address"
            />
            <button onClick={fetchAccountInfo}>Fetch Account Info</button>
            </div>
            {accountInfo && (
                <div className="result-container">
                    <h2>Account Information</h2>
                    <pre>{JSON.stringify(accountInfo, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default AccountInfo;
