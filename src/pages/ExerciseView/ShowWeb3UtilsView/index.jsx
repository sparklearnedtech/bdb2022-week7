import { useState } from "react";
import BlockChainHelper from "../../../utils/BlockChainHelper";
import "../style.css";

function ShowWeb3UtilsView() {
  const [results, setResults] = useState("");

  const showWeb3Utils = async () => {
    const utils = await BlockChainHelper.showWeb3Utils();
    console.log("Web 3 Utilities function", utils);
    setResults(JSON.stringify(utils));
  };

  return (
    <div className="row">
      <div className="col-5 pb-1">
        <code>
          [Show Web3 utilities function]
          <br />
          window.web3.utils;
        </code>
      </div>
      <div className="col-1 pb-1 my-auto">
        <button
          className={"submit btn btn-flat btn-primary float-end "}
          type="button"
          onClick={showWeb3Utils}
        >
          Run
        </button>
      </div>
      <div className="col-6 pb-1">
        <strong>Web3 Utilities:</strong>
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

export default ShowWeb3UtilsView;
