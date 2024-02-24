import React, { useState } from "react";

function Address({ onBack, onNext }) {
  const [formData, setFormData] = useState({
    pincode: "",
    address: "",
    city: "",
    dob: "",
    mobile: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length === 0) {
      if (onNext) {
        onNext(formData);
      }
      console.log("Form submitted successfully:", formData);
    } else {
      setErrors(newErrors);
      console.log("Form has errors:", newErrors);
    }
  };

  const validateForm = (data) => {
    let newErrors = {};

    if (!data.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    }

    if (!data.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!data.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!data.dob.trim()) {
      newErrors.dob = "Date of Birth is required";
    }

    if (!data.mobile.trim()) {
      newErrors.mobile = "Mobile Number is required";
    } else if (isNaN(data.mobile) || data.mobile.length !== 10) {
      newErrors.mobile = "Mobile Number is invalid";
    }

    if (!data.agree) {
      newErrors.agree = "You must agree to continue";
    }

    return newErrors;
  };

  return (
    <div>
      <div className="address_header">
        <h2>Where do we send the price?</h2>
        <p className="add_para">Enter your address deatils</p>
      </div>
      <form>
        <div className="fname_lname">
          <div className={errors.pincode ? "error" : ""}>
            <input
              type="number"
              placeholder="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              className="fname"
            />
            {errors.pincode && (
              <span className="error-message">{errors.pincode}</span>
            )}
          </div>

          <div className={errors.address ? "error" : ""}>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="fname"
            />
            {errors.address && (
              <span className="error-message">{errors.address}</span>
            )}
          </div>
        </div>

        <div className={errors.city ? "error" : ""}>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="city"
          />
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>

        <div className="fname_lname1">
          <div className={errors.dob ? "error" : ""}>
            <input
              type="date"
              placeholder="Date of Birth"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="dob"
            />
            {errors.dob && <span className="error-message">{errors.dob}</span>}
          </div>

          <div className={errors.mobile ? "error" : ""}>
            <input
              type="number"
              placeholder="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="mobile"
            />
            {errors.mobile && (
              <span className="error-message">{errors.mobile}</span>
            )}
          </div>
        </div>

        <div className="agree">
          <div className={errors.agree ? "error" : ""}>
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={formData.agree}
              onChange={handleInputChange}
            />
            <label htmlFor="agree">
              Increase your chance of winning by verifying your mobile
            </label>
            {errors.agree && (
              <span className="error-message">{errors.agree}</span>
            )}
          </div>
        </div>

        <div className="button-block">
          <button onClick={onBack} className="back_button">
            Back
          </button>
          <button onClick={handleSubmit} className="continue_button">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default Address;
