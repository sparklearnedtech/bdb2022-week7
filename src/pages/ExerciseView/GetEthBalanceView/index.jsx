import { useState } from "react";
import BlockChainHelper from "../../../utils/BlockChainHelper";
import "../style.css";

function GetEthBalanceView() {
  const [results, setResults] = useState("");
  const [address, setAddress] = useState("");

  const handleOnChange = (event) => {
    setAddress(event.target.value);
  };

  const getEthBalance = async () => {
    const isValid = await BlockChainHelper.isAddress(address);
    if (!isValid) {
      alert("Please input address");
      return;
    }
    try {
      const balance = await BlockChainHelper.fetchEthBal(address);
      setResults(balance);
      console.log("ETH Balance", balance);
    } catch (error) {
      console.error("Error Getting Balance", error);
    }
  };

  return (
    <div className="row">
      <div className="col-5 pb-1">
        <code>
          [Get eth balance function]
          <br />
          window.web3.eth.getBalance('
          <input
            value={address}
            width="100"
            type="text"
            onChange={handleOnChange}
          />
          ');
        </code>
      </div>
      <div className="col-1 pb-1 my-auto">
        <button
          className={"submit btn btn-flat btn-primary float-end "}
          type="button"
          onClick={getEthBalance}
        >
          Run
        </button>
      </div>
      <div className="col-6 pb-1">
        <strong>Get ETH Balance Logs:</strong>
        <textarea
          id="getEthBalance"
          name="getEthBalance"
          rows="4"
          value={results}
          className="textarea"
          readOnly
        />
      </div>
    </div>
  );
}

export default GetEthBalanceView;
