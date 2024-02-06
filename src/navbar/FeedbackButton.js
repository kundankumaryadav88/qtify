// FeedbackButton.js
import React from 'react';
import "./Navbar.css"

const FeedbackButton = ({ text }) => {
  return (
    <button className="feedback-button">
      {text}
    </button>
  );
};

export default FeedbackButton;
