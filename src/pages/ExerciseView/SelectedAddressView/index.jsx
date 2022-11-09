import { useState } from "react";
import BlockChainHelper from "../../../utils/BlockChainHelper";
import "../style.css";

function SelectedAddressView({ setSenderAddress }) {
  const [results, setResults] = useState("");

  const getSelectedAddress = async () => {
    const address = await BlockChainHelper.getSelectedAddress();
    setResults(address);
    setSenderAddress(address);
    console.log("Selected Address", address);
  };

  return (
    <div className="row">
      <div className="col-5 pb-1">
        <code>
          [Show selected address function]
          <br />
          window.web3.eth.currentProvider.selectedAddress;
        </code>
      </div>
      <div className="col-1 pb-1 my-auto">
        <button
          className={"submit btn btn-flat btn-primary float-end "}
          type="button"
          onClick={getSelectedAddress}
        >
          Run
        </button>
      </div>
      <div className="col-6 pb-1">
        <strong>Selected Address:</strong>
        <textarea
          id="selectedAddress"
          name="selectedAddress"
          rows="4"
          value={results}
          className="textarea"
          readOnly
        />
      </div>
    </div>
  );
}

export default SelectedAddressView;
