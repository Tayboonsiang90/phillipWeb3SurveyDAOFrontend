import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../contexts/globalProvider";
import image1 from "../media/faqimage1.jpg";
import image2 from "../media/faqimage2.jpg";
import image3 from "../media/faqimage3.jpg";
import image4 from "../media/faqimage4.jpg";
import image5 from "../media/faqimage5.jpg";
import image6 from "../media/faqimage6.jpg";
import image7 from "../media/faqimage7.jpg";
import image8 from "../media/faqimage8.jpg";

// // Environment Variables

export default function Home() {
    let { currentAccountAddress, metamaskExistCheck, currentChainId, currentAccountEthBal, currentAccountVoteBal, setCurrentAccountAddress, setMetamaskExistCheck, setCurrentChainId, setCurrentAccountEthBal, setCurrentAccountVoteBal } = useGlobalContext();

    return (
        <React.Fragment>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <h1 className="border border-5" style={{ fontSize: "5em" }}>
                    {" "}
                    www.tinyurl.com/phillipdemo
                </h1>
                <h1 className="mt-5">Instructions: </h1>
                <ol className="list-group list-group-numbered w-75 border border-5">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold h5">Install Metamask</div>
                            Install Metamask from the{" "}
                            <a href="https://metamask.io/" target="_blank" rel="noreferrer">
                                Google Chrome Extension Store
                            </a>
                            . Read this{" "}
                            <a href="https://drive.google.com/file/d/1-B5Tji0XZbZcp3KqoWnoaATXv6wL4VCG/view?usp=sharing" target="_blank" rel="noreferrer">
                                guide
                            </a>{" "}
                            if you need help.
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold h5">Connect your wallet to this website</div>
                            On the top right corner, click <img src={image1} alt="Logo" style={{ width: "6em" }}></img>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold h5">Change your network to Rinkeby</div>
                            <div>
                                On your Metamask extension, change your network to Rinkeby Network. <img src={image3} alt="Logo" style={{ width: "20em" }}></img>
                            </div>
                            <div>
                                If you are having trouble, click on this prompt on the website. <img src={image2} alt="Logo" style={{ width: "9em" }}></img>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold h5">Claim some ETH</div>
                            ETH is used to pay for transactions on the blockchain. You need to claim some ETH on our{" "}
                            <a href="https://tangerine-yeot-9ac935.netlify.app/EthFaucet" target="_blank" rel="noreferrer">
                                website
                            </a>
                            . We will give you 0.1 ETH.
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold h5">Claim some VOTE Tokens</div>1 VOTE Token represent 1 Voting power. You can claim 100 VOTE free once{" "}
                            <a href="https://tangerine-yeot-9ac935.netlify.app/VoteFaucet" target="_blank" rel="noreferrer">
                                here
                            </a>
                            , or buy{" "}
                            <a href="https://app.uniswap.org/#/swap?chain=rinkeby&inputCurrency=ETH&outputCurrency=0x257D9Cf29c6f26806c94794a7F39Ee3c28cD28e7" target="_blank" rel="noreferrer">
                                here
                            </a>
                            .
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold h5">Vote in Proposal #6 and #7</div>
                            <div>
                                On top, click the VOTE button. <img src={image4} alt="Logo" style={{ width: "3em" }}></img>
                            </div>
                            <div>
                                Under Active Proposals, look for Proposal #6 and Proposal #7. Click either. <img src={image7} alt="Logo" style={{ width: "10em" }}></img>
                            </div>
                            <div>
                                On the right side, select your Vote choice. <img src={image5} alt="Logo" style={{ width: "12em" }}></img>
                            </div>
                            <div>
                                Then, click the Vote button. <img src={image6} alt="Logo" style={{ width: "3em" }}></img>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold h5">Claim your free NFT!</div>
                            <div>
                                Once you finished voting, you can claim your free NFT by clicking on the green button. <img src={image8} alt="Logo" style={{ width: "8em" }}></img>
                            </div>
                            <div>
                                You can see your NFT by going{" "}
                                <a href="https://testnets.opensea.io/account" target="_blank" rel="noreferrer">
                                    here
                                </a>
                                .
                            </div>
                        </div>
                    </li>
                </ol>
                <h1 className="mt-5">Frequently Asked Questions (FAQ) </h1>
                <div className="accordion accordion-flush border w-75 border border-5" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                                1. What is Metamask?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <a href="https://metamask.io/" target="_blank" rel="noreferrer">
                                    Metamask
                                </a>{" "}
                                is the most widely used crypto wallet to interact with your Ethereum account. Use this{" "}
                                <a href="https://drive.google.com/file/d/1-B5Tji0XZbZcp3KqoWnoaATXv6wL4VCG/view?usp=sharing" target="_blank" rel="noreferrer">
                                    guide
                                </a>{" "}
                                to install Metamask.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
                                2. What is ETH?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                You need ETH to make transactions on the blockchain. You can claim some ETH free{" "}
                                <a href="https://tangerine-yeot-9ac935.netlify.app/EthFaucet" target="_blank" rel="noreferrer">
                                    here
                                </a>
                                .
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">
                                3. What is VOTE?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">VOTE is a token used to represent 1 voting power on the blockchain.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour">
                                4. How to get VOTE?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                You can claim 100 VOTE free once{" "}
                                <a href="https://tangerine-yeot-9ac935.netlify.app/VoteFaucet" target="_blank" rel="noreferrer">
                                    here
                                </a>
                                , or buy{" "}
                                <a href="https://app.uniswap.org/#/swap?chain=rinkeby&inputCurrency=ETH&outputCurrency=0x257D9Cf29c6f26806c94794a7F39Ee3c28cD28e7" target="_blank" rel="noreferrer">
                                    here
                                </a>
                                .
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive">
                                5. Other questions?
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Reach out to taybs@phillip.com.sg (Tay Boon Siang) via Teams messages. I'll be happy to help you get your first NFT!</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
