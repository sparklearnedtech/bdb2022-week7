import Web3 from "web3";
import axios from "axios";

const INFURA_PROVIDER = `${process.env.REACT_APP_INFURA_GOERLI_API_URL}/${process.env.REACT_APP_INFURA_API_KEY}`;

const BlockChainHelper = {
  configureWeb3: (provider = null) => {
    if (!window.ethereum &&  !provider) {
      throw new Error("No Ethereum provider detected");
    }
    return new Web3(provider ? new Web3.providers.HttpProvider(provider) : window.ethereum);
  },
  initializeWeb3: async () => {
    window.web3 = await BlockChainHelper.configureWeb3(INFURA_PROVIDER);
    return window.web3;
  },
  getApiResults: async url => {
    try {
      const response = await axios.get(url);
      if (response && response.data && response.data.result) {
        return response.data.result;
      }
    } catch (error) {
      console.error("Error fetching response", error);
    }
  },
  fetchEthBal: async address => {
    const web3 = new Web3(Web3.givenProvider || INFURA_PROVIDER);
    const result = await web3.eth.getBalance(address);
    const balance = BlockChainHelper.convertWeiToEth(result);
    return balance;
  },
  initializeToken: async (abi, address) => {
    const web3 = new Web3(Web3.givenProvider || INFURA_PROVIDER);
    window.token = await new web3.eth.Contract(abi, address);
    return window.token;
  },
  getTotalSupply: async () => {
    let totalSupply = 0;
    if (window.token && window.token.methods) {
      await window.token.methods.totalSupply().call((error, result) => {
        if (error) {
          console.error("Error getting total supply", error);
        } else {
          totalSupply = BlockChainHelper.convertWeiToEth(result);
        }
      });
    } else {
      console.error("Window.token is empty");
    }
    return totalSupply;
  },
  fetchTokenBal: async address => {
    let balance = 0;
    if (window.token && window.token.methods) {
      await window.token.methods.balanceOf(address).call((error, result) => {
        if (error) {
          console.error("Error getting token balance", error);
        } else {
          balance = BlockChainHelper.convertWeiToEth(result);
        }
      });
    } else {
      console.error("Window.token is empty");
    }
    return balance;
  },
  convertWeiToEth: async (value, unit = "ether") => {
    if (!window.web3.utils) {
      console.error("Unable to convert");
      return;
    }
    return await window.web3.utils.fromWei(value, unit);
  },
  convertEthToWei: async (value, unit = "ether") => {
    if (!window.web3.utils) {
      console.error("Unable to convert");
      return;
    }
    return await window.web3.utils.toWei(value, unit);
  },
  showWeb3Utils: async () => {
    if (!window.web3.utils) {
      console.error("web3 not intitialized");
    }
    return await window.web3.utils;
  },
  isAddress: async address => {
    return await window.web3.utils.isAddress(address);
  },
  getAccounts: async () => {
    try {
      const web3 = new Web3(Web3.givenProvider || INFURA_PROVIDER);
      const accounts = await web3.eth.requestAccounts();
      return accounts[0];
    } catch (error) {
      console.error("Get Accounts error", error);
      return null;
    }
  },
  getSelectedAddress: async () => {
    try {
      const web3 = new Web3(Web3.givenProvider || INFURA_PROVIDER);
      const selectedAddress = await web3.currentProvider.selectedAddress;
      return selectedAddress;
    } catch (error) {
      console.error("Error getting current provider", error);
    }
  },
  sendTransaction: async (from, to, value) => {
    const web3 = new Web3(Web3.givenProvider || INFURA_PROVIDER);

    const txObj = {
      from,
      to,
      value
    };

    try {
      const txHash = await web3.eth.sendTransaction(txObj);
      return txHash;
    } catch (error) {
      console.error("Tx send error", error);
    }
  }
};

export default BlockChainHelper;


