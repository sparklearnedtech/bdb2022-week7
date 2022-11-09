import { useState } from "react";
import bdbLogo from "../../images/bdb.png";
import ConfigureWeb3View from "./ConfigureWeb3View";
import RequestAccountsView from "./RequestAccountsView";
import SelectedAddressView from "./SelectedAddressView";
import GetEthBalanceView from "./GetEthBalanceView";
import ConvertWeiToEthView from "./ConvertWeiToEthView";
import ConvertEthToWeiView from "./ConvertEthToWeiView";
import ShowWeb3UtilsView from "./ShowWeb3UtilsView";
import InitializeSmartContractView from "./InitializeSmartContractView";
import SendTransactionView from "./SendTransactionView";

import "./style.css";

function ExerciseView() {
  const [senderAddress, setSenderAddress] = useState("");
  return (
    <>
      <div className="py-5 text-center">
        <div>
          <img
            className="mx-auto mb-4"
            src={bdbLogo}
            alt=""
            width="180"
            height="96"
          />
        </div>
        <h2>BDB2022 Week 7 Exercise</h2>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <h4 className="mb-3">
            Functions (open your browser console for the results or view in the
            text area)
          </h4>
        </div>
      </div>
      <hr />
      <ConfigureWeb3View />
      <hr />
      <RequestAccountsView />
      <hr />
      <SelectedAddressView setSenderAddress={setSenderAddress} />
      <hr />
      <GetEthBalanceView />
      <hr />
      <ConvertWeiToEthView />
      <hr />
      <ConvertEthToWeiView />
      <hr />
      <ShowWeb3UtilsView />
      <hr />
      <InitializeSmartContractView />
      <hr />
      <SendTransactionView senderAddress={senderAddress} />
    </>
  );
}

export default ExerciseView;
