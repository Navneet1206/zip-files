// src/pages/Tutorials.jsx
import React from "react";
import "./Tutorials.css";

const tutorialsData = [
  {
    title: "Getting Started with Web3",
    description: "Learn the basics of Web3 and how to get started with decentralized applications.",
  },
  {
    title: "Understanding Smart Contracts",
    description: "A deep dive into smart contracts, how they work, and how to create your own.",
  },
  {
    title: "Building Your First DApp",
    description: "Step-by-step guide to building your first decentralized application on Ethereum.",
  },
  {
    title: "Exploring DeFi",
    description: "An overview of decentralized finance (DeFi) and how to participate in it.",
  },
  {
    title: "NFTs Explained",
    description: "Understanding non-fungible tokens (NFTs) and their use cases.",
  },
];

const Tutorials = () => {
  return (
    <div className="tutorials-container">
      <h1 className="tutorials-title">Tutorials</h1>
      <p className="tutorials-intro">
        Welcome to the tutorials section! Here you can find various resources to help you learn about Web3, blockchain technology, and decentralized applications.
      </p>
      <ul className="tutorials-list">
        {tutorialsData.map((tutorial, index) => (
          <li key={index} className="tutorial-item">
            <h2 className="tutorial-title">{tutorial.title}</h2>
            <p className="tutorial-description">{tutorial.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tutorials;
