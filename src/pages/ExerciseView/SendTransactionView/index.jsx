import { useState } from "react";
import { stringify } from "flatted";
import BlockChainHelper from "../../../utils/BlockChainHelper";
import "../style.css";

function SendTransactionView({ senderAddress }) {
  const [results, setResults] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleRecipientOnChange = (event) => {
    setRecipientAddress(event.target.value);
  };

  const handleAmountOnChange = (event) => {
    setAmount(event.target.value);
  };

  const sendTransaction = async () => {
    if (recipientAddress === "") {
      alert("Please input recipient address");
      return;
    }

    if (amount === "") {
      alert("Please input amount");
      return;
    }
    console.log("SEnding transaction", senderAddress);
    try {
      const tx = await BlockChainHelper.sendTransaction(
        senderAddress,
        recipientAddress,
        amount
      );
      console.log("Tx results", tx);
      setResults(stringify(tx));
    } catch (error) {
      alert("Invalid input");
      console.error("Invalid Input ", error);
    }
  };

  return (
    <div className="row">
      <div className="col-5 pb-1">
        <code>
          [Send a transaction function]
          <br />
          window.web3.eth.sendTransaction('
          {senderAddress}', '
          <input
            value={recipientAddress}
            width="100"
            type="text"
            placeholder="recipient address"
            onChange={handleRecipientOnChange}
          />
          ' , '
          <input
            value={amount}
            width="100"
            type="text"
            placeholder="amount in wei"
            onChange={handleAmountOnChange}
          />
          ' ');
        </code>
      </div>
      <div className="col-1 pb-1 my-auto">
        <button
          className={"submit btn btn-flat btn-primary float-end "}
          type="button"
          onClick={sendTransaction}
        >
          Run
        </button>
      </div>
      <div className="col-6 pb-1">
        <strong>Sent Transaction Log</strong>
        <textarea
          id="sendTransaction"
          name="sendTransaction"
          rows="4"
          value={results}
          className="textarea"
          readOnly
        />
      </div>
    </div>
  );
}

export default SendTransactionView;
