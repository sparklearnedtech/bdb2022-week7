import { useState } from "react";
import { stringify } from "flatted";
import BlockChainHelper from "../../../utils/BlockChainHelper";
import configureWeb3CodeImg from "../../../images/configureWeb3Code.png";
import "../style.css";

function ConfigureWeb3View() {
  const [results, setResults] = useState("");

  const configureWeb3 = async () => {
    const web3 = await BlockChainHelper.initializeWeb3();
    setResults(stringify(web3));
    console.log("Configure Web 3", web3);
  };

  return (
    <div className="row">
      <div className="col-5 pb-1">
        <code>
          [Initialize Web3, before anything else, let's use a custom function
          for this one]
          <br />
          window.web3 = configureWeb3();
          <br />
          <img src={configureWeb3CodeImg} alt="" />
        </code>
      </div>
      <div className="col-1 pb-1 my-auto">
        <button
          className={"submit btn btn-flat btn-primary float-end "}
          type="button"
          onClick={configureWeb3}
        >
          Run
        </button>
      </div>
      <div className="col-6 pb-1">
        <strong>Configure Web3 Logs:</strong>
        <textarea
          id="configureWeb3"
          name="configureWeb3"
          rows="4"
          value={results}
          className="textarea"
          readOnly
        />
      </div>
    </div>
  );
}

export default ConfigureWeb3View;
