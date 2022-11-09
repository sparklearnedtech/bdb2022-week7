import { useState } from "react";
import { stringify } from "flatted";
import BlockChainHelper from "../../../utils/BlockChainHelper";
import "../style.css";

function InitializeSmartContractView() {
  const [results, setResults] = useState("");
  const [contractAbi, setContractAbi] = useState("");
  const [contractAddress, setContractAddress] = useState("");

  const handleContractAbiOnChange = (event) => {
    setContractAbi(event.target.value);
  };

  const handleContractAddressOnChange = (event) => {
    setContractAddress(event.target.value);
  };

  const initializeSmartContract = async () => {
    if (contractAbi === "") {
      alert("Please input smart contract abi");
      return;
    }

    if (contractAddress === "") {
      alert("Please input smart contract address");
      return;
    }
    console.log("Initialize smart contract");
    try {
      const smartContract = await BlockChainHelper.initializeToken(
        JSON.parse(contractAbi),
        contractAddress
      );
      setResults(stringify(smartContract));
      console.log(`Smart Contract Address ${contractAddress}`, smartContract);
    } catch (error) {
      alert("Error");
      console.error("Invalid Input ", error);
    }
  };

  return (
    <div className="row">
      <div className="col-5 pb-1">
        <code>
          [Initialize a smart contract function - Please provide a token ABI and
          contract address]
          <br />
          window.contract = new web3.eth.Contract('
          <input
            value={contractAbi}
            width="100"
            type="text"
            placeholder="contract ABI"
            onChange={handleContractAbiOnChange}
          />
          ,
          <input
            value={contractAddress}
            width="100"
            type="text"
            placeholder="contract address"
            onChange={handleContractAddressOnChange}
          />
          ');
        </code>
      </div>
      <div className="col-1 pb-1 my-auto">
        <button
          className={"submit btn btn-flat btn-primary float-end "}
          type="button"
          onClick={initializeSmartContract}
        >
          Run
        </button>
      </div>
      <div className="col-6 pb-1">
        <strong>Initialize Smart Contract</strong>
        <textarea
          id="initializeSmartContract"
          name="initializeSmartContract"
          rows="4"
          value={results}
          className="textarea"
          readOnly
        />
      </div>
    </div>
  );
}

export default InitializeSmartContractView;
