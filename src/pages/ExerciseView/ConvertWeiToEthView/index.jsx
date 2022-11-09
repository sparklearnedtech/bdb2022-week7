import { useState } from "react";
import BlockChainHelper from "../../../utils/BlockChainHelper";
import "../style.css";

function ConvertWeiToEthView() {
  const [results, setResults] = useState("");
  const [value, setValue] = useState("");

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const convertWeiToEth = async () => {
    if (value === "") {
      alert("Please input amount in Wei");
      return;
    }
    try {
      const ether = await BlockChainHelper.convertWeiToEth(value);
      setResults(ether);
      console.log(`${value} wei is equivalent to ${ether} ETH:`);
    } catch (error) {
      alert("Invalid input");
      console.error("Invalid Input ", value);
    }
  };

  return (
    <div className="row">
      <div className="col-5 pb-1">
        <code>
          [Convert wei to eth function]
          <br />
          window.web3.utils.fromWei('
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
          onClick={convertWeiToEth}
        >
          Run
        </button>
      </div>
      <div className="col-6 pb-1">
        <strong>Wei to ETH</strong>
        <textarea
          id="weiToEth"
          name="weiToEth"
          rows="4"
          value={results}
          className="textarea"
          readOnly
        />
      </div>
    </div>
  );
}

export default ConvertWeiToEthView;
