# Bitcoin Blockchain Explorer

A Bitcoin blockchain explorer built with React and QuickNode's RPC API. This application allows users to fetch and display block, transaction, and account information from the Bitcoin blockchain.

## Features

- Fetch and display Bitcoin block information by block hash
- Retrieve and show details of transactions using transaction ID (txid)
- Get and display account information by Bitcoin address

## Prerequisites

- Node.js and npm installed
- QuickNode account with a Bitcoin RPC API endpoint

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash```
git clone https://github.com/Dev-suite/bitcoin-blockchain-explorer.git
cd bitcoin-blockchain-explorer

**2. Install Dependencies**

npm install
3. Set Up Environment Variables
Create a .env file in the root directory and add your QuickNode API endpoint:


REACT_APP_QUICKNODE_API_URL=https://[your-node-name].[network].quiknode.pro
Replace [your-node-name] and [network] with your actual QuickNode API endpoint details.

**4. Run the Application**

npm start
Open http://localhost:3000 to view the application in your browser.

**Project Structure**
src/BitcoinService.js: Contains functions for making API requests to QuickNode's RPC API.
src/BlockInfo.js: Component to fetch and display block information.
src/TransactionInfo.js: Component to fetch and display transaction details.
src/AccountInfo.js: Component to fetch and display account information.
src/styles.css: CSS styles for the application.

**Access the Complete Code and Live Demo**
GitHub Repository: https://github.com/Dev-suite/bitcoin-blockchain-explorer
Live Demo: https://your-live-demo-link.com

**Contributing**
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

**License**
This project is licensed under the MIT License. See the LICENSE file for details.

**Acknowledgements**
QuickNode for providing the RPC API services.
React for the powerful UI library.
