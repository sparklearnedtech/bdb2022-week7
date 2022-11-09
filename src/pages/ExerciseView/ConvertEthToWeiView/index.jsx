import { useState } from "react";
import BlockChainHelper from "../../../utils/BlockChainHelper";
import "../style.css";

function ConvertEthToWeiView() {
  const [results, setResults] = useState("");
  const [value, setValue] = useState("");

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const convertEthToWei = async () => {
    if (value === "") {
      alert("Please input amount in Ether");
      return;
    }
    try {
      const wei = await BlockChainHelper.convertEthToWei(value);
      setResults(wei);
      console.log(`${value} ETH is equivalent to ${wei} wei:`);
    } catch (error) {
      alert("Invalid input");
      console.error("Invalid Input ", value);
    }
  };

  return (
    <div className="row">
      <div className="col-5 pb-1">
        <code>
          [Convert eth to wei function]
          <br />
          window.web3.utils.toWei('
          <input
            value={value}
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
          onClick={convertEthToWei}
        >
          Run
        </button>
      </div>
      <div className="col-6 pb-1">
        <strong>ETH to Wei</strong>
        <textarea
          id="ethToWei"
          name="ethToWei"
          rows="4"
          value={results}
          className="textarea"
          readOnly
        />
      </div>
    </div>
  );
}

export default ConvertEthToWeiView;
