// src/BitcoinService.js
import './App.css';
const apiUrl = process.env.REACT_APP_QUICKNODE_API_URL;

export const getBlockInfo = async (blockHash) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                method: 'getblock',
                params: [blockHash],
            }),
        };
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error('Error fetching block info:', error);
        throw error;
    }
};

export const getTransactionInfo = async (txid) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                method: 'getrawtransaction',
                params: [txid, true],
            }),
        };
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error('Error fetching transaction info:', error);
        throw error;
    }
};

export const getAccountInfo = async (address) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                method: 'validateaddress',
                params: [address],
            }),
        };
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error('Error fetching account info:', error);
        throw error;
    }
};
