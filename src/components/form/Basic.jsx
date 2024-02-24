import React, { useState, useEffect } from "react";
import "./Form.css";
import Male from "../../assets/images/male.png"
import Female from "../../assets/images/female.png"

function Basic({ onSuccess, formData, onDataChange }) {
  const [localFormData, setLocalFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });

  // Update local form data when formData prop changes
  useEffect(() => {
    setLocalFormData(formData);
  }, [formData]);

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({
      ...localFormData,
      [name]: value,
    });

    // Update parent component's form data state
    onDataChange({
      ...localFormData,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!localFormData?.firstName?.trim()) {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    if (!localFormData?.lastName?.trim()) {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }

    if (!localFormData?.email?.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(localFormData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!localFormData?.gender) {
      newErrors.gender = "Gender is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (onSuccess) {
        onSuccess();
      }
      console.log("Form submitted successfully:", localFormData);
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div className="basic_header">
      <header>
        <h2>Congratulations!</h2>
        <p>Enter winning data now</p>
      </header>

      <div className="form">
        <form>
        <div className="gender">
            <div className="options">
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={localFormData && localFormData.gender === "Male"}
                onChange={handleInputChange}
              />
              <label htmlFor="male">
 
                <div class="icon">
                  <img src={Male} />
 
                </div>
                <p>Male</p>
              </label>
            </div>
            <div className="options">
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={localFormData && localFormData.gender === "Female"}
                onChange={handleInputChange}
              />
              <label htmlFor="female">
                <div class="icon">
                  <img src={Female}/>
 
                </div>
                <p>Female</p>
              </label>
            </div>
 
          </div>

          <div className="fname_lname">
            <div className={errors.firstName ? "error" : ""}>
              <input
                type="text"
                placeholder="First Name"
                value={localFormData && localFormData.firstName}
                onChange={handleInputChange}
                name="firstName"
                className="fname"
              />
              {errors.firstName && (
                <span className="error-message">{errors.firstName}</span>
              )}
            </div>

            <div className={errors.lastName ? "error" : ""}>
              <input
                type="text"
                placeholder="Last Name"
                value={localFormData && localFormData.lastName}
                onChange={handleInputChange}
                name="lastName"
                className="fname"
              />
              {errors.lastName && (
                <span className="error-message">{errors.lastName}</span>
              )}
            </div>
          </div>

          <div className={errors.email ? "error" : ""}>
            <input
              type="email"
              placeholder="Email"
              value={localFormData && localFormData.email}
              onChange={handleInputChange}
              name="email"
              className="email"
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
        </form>
        <div className="join_button">
          <button onClick={handleSubmit} className="join">
            Join For Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Basic;
