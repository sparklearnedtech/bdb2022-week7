import bdbLogo from './images/bdb.png';
import configureWeb3Code from './images/configureWeb3Code.png';
import './App.css';
import {useState, ReactDOM} from "react";
import {configureWeb3} from "./blockchain-helper";

function App() {
    const [state, setState] = useState({
        web3: null,
        connectedAccounts: [],
        selectedAddress: '',
        fromAddress: '0xFaF4b6715308a65AB3993a76aE89Ffd6c0ac37C8',
        addressToGetBalance: '',
        amountToSendInEther: '',
        valueInWei: '',
        valueInEther: '',
        toAddress: '',
        amount: '',
        contractAddress: '',
        contractABI: '',

        addressToGetBalanceDone: false,
        amountToSendInEtherDone: false,
        amountToSendInWeiDone: false,
        utilsDone: false,
        initSmartContractDone: false
    })

    function _setState(name, value) {
        setState(prevState => ({...prevState, [name]: value}));
    }

    function onChange(event) {
        // console.log(event)
        const {name, value} = event.target;
        // console.log(name, value)
        _setState(name, value);
    }

    return (
        <>
            <div className="container">
                <main>
                    <div className="py-5 text-center">
                        <div>
                            <img className="mx-auto mb-4" src={bdbLogo} alt="" width="180" height="96"/>
                        </div>
                        <h2>BDB2022 Week 7 Exercise</h2>
                    </div>

                    <div className="row g-5">
                        <div className="col-md-12">
                            <h4 className="mb-3">Functions (open your browser console for the results)</h4>
                            {/* Web3 initialization */}
                            <div>
                                <code>
                                    <div>
                                        [Initialize Web3, before anything else, let's use a custom function for this one]
                                        <br/>
                                        window.web3 = configureWeb3();
                                        <br/>
                                        <img src={configureWeb3Code} alt=""/>
                                    </div>
                                    <button
                                        className={"submit btn btn-flat btn-primary " + (!state.web3 ? '' : 'disabled')}
                                        type="button"
                                        onClick={async () => {
                                            // let's expose web3 to the browser
                                            window.web3 = configureWeb3();
                                            console.log("Web3 object created, type window.web3 in the console");
                                            console.log("==========");
                                            _setState('web3', window.web3);
                                        }}
                                    >Run
                                    </button>
                                </code>
                            </div>
                            <hr/>

                            {/* Request accounts function */}
                            <div>
                                <code>
                                    <div>
                                        [Request accounts function]
                                        <br/>
                                        window.web3.eth.requestAccounts();
                                        <br/>
                                    </div>
                                    <button
                                        className={"submit btn btn-flat btn-primary " + (state.connectedAccounts.length <= 0 ? '' : 'disabled')}
                                        type="button"
                                        onClick={async () => {
                                            let accounts = await window.web3.eth.requestAccounts()
                                            _setState('connectedAccounts', accounts);
                                            console.log('connectedAccounts:', accounts[0])
                                            console.log("==========");
                                        }}
                                    >Run
                                    </button>
                                </code>
                            </div>
                            <hr/>

                            {/* Show selected address function */}
                            <div>
                                <code>
                                    <div>
                                        [Show selected address function]
                                        <br/>
                                        window.web3.eth.currentProvider.selectedAddress;
                                        <br/>
                                    </div>
                                    <button
                                        className={"submit btn btn-flat btn-primary " + (!state.selectedAddress ? '' : 'disabled')}
                                        type="button"
                                        onClick={async () => {
                                            let address = await window.web3.eth.currentProvider.selectedAddress
                                            // console.log(typeof address)
                                            // _setState('selectedAddress', address);
                                            _setState("selectedAddress", address)
                                            // console.log(state.selectedAddress)
                                            console.log("selectedAddress:", address)
                                            console.log("==========");
                                        }}
                                    >Run
                                    </button>
                                </code>
                            </div>
                            <hr/>
                            {/* Get eth balance function */}
                            <div>
                                <code>
                                    <div>
                                        [Get eth balance function]
                                        <br/>
                                        window.web3.eth.getBalance('
                                            <input
                                                name='addressToGetBalance'
                                                type="text"
                                                onChange={onChange}
                                            />
                                        ')
                                        <br/>
                                    </div>
                                    <button
                                        className={"submit btn btn-flat btn-primary "}
                                        type="button"
                                        onClick={async () => {
                                            let bal = await window.web3.eth.getBalance(state.addressToGetBalance)
                                            console.log("balance:", bal)
                                            console.log("==========");
                                        }}
                                    >Run
                                    </button>
                                </code>
                            </div>
                            <hr/>

                            {/* Convert wei to ether function */}
                            <div>
                                <code>
                                    <div>
                                        [Convert wei to ether function]
                                        <br/>
                                        window.web3.utils.fromWei('
                                            <input
                                                name='valueInWei'
                                                type="text"
                                                onChange={onChange}
                                            />
                                        ')
                                        <br/>
                                    </div>
                                    <button
                                        className={"submit btn btn-flat btn-primary "}
                                        type="button"
                                        onClick={async () => {
                                            let ether = await window.web3.utils.fromWei(state.valueInWei, "ether")
                                            console.log("ether:", ether)
                                            console.log("==========");
                                        }}
                                    >Run
                                    </button>
                                </code>
                            </div>
                            <hr/>
                            {/* Convert ether to wei function */}
                            <div>
                                <code>
                                    <div>
                                        [Convert ether to wei function]
                                        <br/>
                                        window.web3.utils.fromWei('
                                            <input
                                                name='valueInEther'
                                                type="text"
                                                onChange={onChange}
                                            />
                                        ')
                                        <br/>
                                    </div>
                                    <button
                                        className={"submit btn btn-flat btn-primary "}
                                        type="button"
                                        onClick={async () => {
                                            let wei = await window.web3.utils.toWei(state.valueInEther, "ether")
                                            console.log("wei:", wei)
                                            console.log("==========");
                                        }}
                                    >Run
                                    </button>
                                </code>
                            </div>
                            <hr/>

                            {/* Show Web3 utilities function */}
                            <div>
                                <code>
                                    <div>
                                        [Show Web3 utilities function]
                                        <br/>
                                        window.web3.utils;
                                        <br/>
                                    </div>
                                    <button
                                        className={"submit btn btn-flat btn-primary "}
                                        type="button"
                                        onClick={async () => {
                                            let utils = await window.web3.utils
                                            console.log("utils:", utils)
                                            console.log("==========");
                                        }}
                                    >Run
                                    </button>
                                </code>
                            </div>
                            <hr/>

                            {/* Initialize a smart contract function */}
                            <div>
                                <code>
                                    <div>
                                        [Initialize a smart contract function - Please provide a token ABI and contract address]
                                        <br/>
                                        window.contract = new web3.eth.Contract(
                                            '<input
                                                name='contractABI'
                                                type="text"
                                                onChange={onChange}
                                                placeholder="contractABI"
                                            />', 
                                            '<input
                                                name='contractAddress'
                                                type="text"
                                                onChange={onChange}
                                                placeholder="contractAddress"
                                            />'
                                        )
                                        <br/>
                                    </div>
                                    <button
                                        className={"submit btn btn-flat btn-primary "}
                                        type="button"
                                        onClick={async () => {
                                            // console.log(state.contractABI)
                                            // console.log(state.contractAddress)
                                            window.token = await new window.web3.eth.Contract(JSON.parse(state.contractABI), state.contractAddress)
                                            console.log("window.contract:", window.token)
                                            console.log("==========");
                                        }}
                                    >Run
                                    </button>
                                </code>
                            </div>
                            <hr/>

                            {/* Send a transaction function */}
                            <div>
                                <code>
                                    <div>
                                        [Send a transaction function]
                                        <br/>
                                        window.web3.eth.sendTransaction('{state.fromAddress}'
                                            '<input
                                                name='toAddress'
                                                type="text"
                                                onChange={onChange}
                                                placeholder="recepient address"
                                            />', 
                                            '<input
                                                name='amount'
                                                type="text"
                                                onChange={onChange}
                                                placeholder="amount"
                                            />'
                                        )
                                        <br/>
                                    </div>
                                    <button
                                        className={"submit btn btn-flat btn-primary "}
                                        type="button"
                                        onClick={async () => {
                                            let txnObj = {
                                                from: state.fromAddress,
                                                to: state.toAddress,
                                                value: state.amount
                                            }
                                            let txn = await window.web3.eth.sendTransaction(txnObj)
                                            console.log("txn:", txn)
                                            console.log("==========")
                                        }}
                                    >Run
                                    </button>
                                </code>
                            </div>
                            <hr/>

                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
