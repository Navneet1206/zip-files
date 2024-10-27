import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";
import "./Transaction.css";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div className="transaction-card">
      <div className="transaction-card-content">
        <div className="transaction-info">
          <a href={`https://etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p>From: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p>To: {shortenAddress(addressTo)}</p>
          </a>
          <p>Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p>Message: {message}</p>
            </>
          )}
        </div>
        <img src={gifUrl || url} alt="Transaction" className="transaction-image" />
        <div className="timestamp">
          <p>{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="transactions-container">
      <div className="transactions-content">
        {currentAccount ? (
          <h3>Latest Transactions</h3>
        ) : (
          <h3>Connect your account to see the latest transactions</h3>
        )}
        <div className="transactions-grid">
          {[...dummyData, ...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
