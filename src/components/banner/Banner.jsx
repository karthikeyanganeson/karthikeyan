import React from "react";
import "./Banner.css";
import { ReactComponent as Logo } from "../../assets/logo/logo-01.svg";
import image from "../../assets/images/test.PNG";

function Banner() {
  return (
    <div className="banner_header">
      {/* <div className="logo_image"> */}
        <div className="logo">
          <Logo />
        </div>
        <div className="image_content">
          <div className="image">
            <img src={image} />
          </div>
          <div className="content">
            <h2>Get Free - iPhone 13 Pro OR Pro Max To Win!!</h2>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Banner;
