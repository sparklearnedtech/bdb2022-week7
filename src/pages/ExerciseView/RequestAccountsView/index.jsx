import { useState } from "react";
import BlockChainHelper from "../../../utils/BlockChainHelper";
import { stringify } from "flatted";
import "../style.css";

function RequestAccountsView() {
  const [results, setResults] = useState("");

  const requestAccounts = async () => {
    const accounts = await BlockChainHelper.getAccounts();
    setResults(stringify(accounts));
    console.log("Requested Accounts", accounts);
  };

  return (
    <div className="row">
      <div className="col-5 pb-1">
        <code>
          [Request accounts function]
          <br />
          window.web3.eth.requestAccounts();
        </code>
      </div>
      <div className="col-1 pb-1 my-auto">
        <button
          className={"submit btn btn-flat btn-primary float-end "}
          type="button"
          onClick={requestAccounts}
        >
          Run
        </button>
      </div>
      <div className="col-6 pb-1">
        <strong>Requested Accounts</strong>
        <textarea
          id="requestAccounts"
          name="requestAccounts"
          rows="4"
          value={results}
          className="textarea"
          readOnly
        />
      </div>
    </div>
  );
}

export default RequestAccountsView;
