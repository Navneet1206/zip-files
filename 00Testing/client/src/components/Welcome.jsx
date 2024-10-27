import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
import "./Welcome.css"; // Import the CSS file

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="input-field"
  />
);

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <>
      <div className="welcome-container">
        <div className="welcome-content">
          <div className="welcome-text">
            <h1 className="welcome-title">
              Welcome <br /> to the crypto world!
            </h1>
          </div>
        </div>
      </div>
      <div className="welcome-container">
        <div className="welcome-content">
          <div className="welcome-text">
            <h1 className="welcome-title">
              Send Crypto <br /> across the world
            </h1>
            <p className="welcome-description">
              Explore the crypto world. Buy and sell cryptocurrencies easily on
              Krypto.
            </p>
            {!currentAccount && (
              <button
                type="button"
                onClick={connectWallet}
                className="connect-wallet-button"
              >
                <AiFillPlayCircle className="play-icon" />
                <p className="connect-wallet-text">Connect Wallet</p>
              </button>
            )}

            <div className="features-grid">
              <div className="feature-item feature-item-reliability">Reliability</div>
              <div className="feature-item">Security</div>
              <div className="feature-item feature-item-ethereum">Ethereum</div>
              <div className="feature-item feature-item-web3">Web 3.0</div>
              <div className="feature-item">Low Fees</div>
              <div className="feature-item feature-item-blockchain">Blockchain</div>
            </div>
          </div>

          <div className="eth-card-container">
            <div className="eth-card">
              <div className="eth-card-header">
                <div className="eth-icon">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div className="eth-card-body">
                <p className="eth-address">{shortenAddress(currentAccount)}</p>
                <p className="eth-label">Ethereum</p>
              </div>
            </div>
            <div className="input-container">
              <Input
                placeholder="Address To"
                name="addressTo"
                type="text"
                handleChange={handleChange}
              />
              <Input
                placeholder="Amount (ETH)"
                name="amount"
                type="number"
                handleChange={handleChange}
              />
              <Input
                placeholder="Keyword (Gif)"
                name="keyword"
                type="text"
                handleChange={handleChange}
              />
              <Input
                placeholder="Enter Message"
                name="message"
                type="text"
                handleChange={handleChange}
              />

              <div className="divider" />

              {isLoading ? (
                <Loader />
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="send-button"
                >
                  Send now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
