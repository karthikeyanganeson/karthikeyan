import React, { useState } from "react";
import "./Form.css";
import Left from "../../assets/icons/arrow-left (1).svg";
import Right from "../../assets/icons/arrow-right.svg"

export default function Questions({ onBack, onNext }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSelectedOption(e.target.value);
    setError(null); // Clear any previous error when an option is selected
  };

  const handleSubmit = () => {
    console.log("clicked");
    if (!selectedOption) {
      setError("Please select an option.");
      return; // Prevent form submission if no option is selected
    }
    // Pass the selected option data back to the parent component (Form)
    if (onNext) {
      onNext(selectedOption);
    }
  };

  return (
    <div>
      <div className="progressBar_container">
        <div class="progress-bar">
          <progress value="20" min="20" max="100">
            75%
          </progress>
          <p>1/6</p>
        </div>
      </div>
      <div>
        <p>Which insurances are absolutely necessary for you?</p>
        <div className="options">
          <div className="option_contaier">
            <input
              type="radio"
              id="option1"
              name="insurance"
              value="Health Insurance"
              checked={selectedOption === "Health Insurance"}
              onChange={handleInputChange}
            />
            <label htmlFor="option1">Health Insurance</label>
          </div>

          <div className="option_contaier">
            <input
              type="radio"
              id="option2"
              name="insurance"
              value="Life Insurance"
              checked={selectedOption === "Life Insurance"}
              onChange={handleInputChange}
            />
            <label htmlFor="option2">Life Insurance</label>
          </div>

          <div className="option_contaier">
            <input
              type="radio"
              id="option3"
              name="insurance"
              value="Term Insurance"
              checked={selectedOption === "Term Insurance"}
              onChange={handleInputChange}
            />
            <label htmlFor="option3">Term Insurance</label>
          </div>
        </div>
        {error && <div className="error-message">{error}</div>}
      </div>
      <div className="button-block">
        <button onClick={onBack} className="back_button">
          Back
        </button>
        <button onClick={handleSubmit} className="continue_button">
          Continue
        </button>
      </div>
    </div>
  );
}
