import React, { useState } from "react";
import Basic from "./Basic";
import Address from "./Address";
import Questions from "./Questions";
import VerifyEmail from "./VerifyEmail";

function Form() {
  const [activeStep, setActiveStep] = useState(0);
  const [basicData, setBasicData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });
  const [addressData, setAddressData] = useState({
    pincode: "",
    address: "",
    city: "",
    dob: "",
    mobile: "",
    agree: false,
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleBasicChange = (data) => {
    console.log("first", data);
    setBasicData(data);
  };

  const handleAddressChange = (data) => {
    setAddressData(data);
  };

  const steps = [
    {
      id: 0,
      title: "Join Now",
      component: (
        <Basic
          data={basicData}
          onDataChange={handleBasicChange}
          onSuccess={handleNext}
        />
      ),
      tagline: "Where do we send the prize",
      active: true,
    },
    {
      id: 1,
      title: "Address",
      component: (
        <Address
          data={addressData}
          onDataChange={handleAddressChange}
          onBack={handleBack}
          onNext={handleNext}
        />
      ),
      tagline: "Where do we send the prize",
      active: true,
    },
    {
      id: 2,
      title: "Questions",
      component: <Questions onBack={handleBack} onNext={handleNext} />,
      tagline: "Answer the following questions to guarantee your registration",
      active: true,
    },
    {
      id: 3,
      title: "Verify the Email",
      component: <VerifyEmail />,
      tagline:
        "For successful participation, you need to confirm the email we just sent to you!!",
      active: true,
    },
  ];

  return (
    <div>
      <header className="header_title">
        <h2>{steps[activeStep].title}</h2>
        <p>{steps[activeStep].tagline}</p>
        <div className="tabList">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`tabItem ${step.id === activeStep ? "active" : ""}`}
            >
              {step.id}
            </div>
          ))}
        </div>
      </header>
      {steps[activeStep].component}
    </div>
  );
}

export default Form;
