import React, { useState, useEffect } from 'react';
import "./Form.css"
import Mail from "../../assets/images/Group 129.svg"
 
function VerifyEmail() {
    const [progress, setProgress] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
 
    useEffect(() => {
        const interval = setInterval(() => {
            // Increment progress by 1 until it reaches 100
            if (progress < 100) {
                setProgress(progress + 1);
            } else {
                // Once progress reaches 100, stop the interval and show success message
                clearInterval(interval);
                setShowSuccess(true);
            }
        }, 50); // Adjust speed of the slider animation here (in milliseconds)
 
        // Clear interval on component unmount to avoid memory leaks
        return () => clearInterval(interval);
    }, [progress]);
 
    return (
        <div>
            {!showSuccess ? (
                <div className='slider_header'>
                    <div className="slider-container">
                        <div className="slider" style={{ width: `${progress}%` }}></div>
                    </div>
                    <p>{progress}% Complete </p>
                </div>
            ) : (
                <div>
                    <div className='mail'>
                        <img src={Mail}/>
                    </div>
                   <div className='success_message'>
                   <p>For successful participation, you need to confirm the email we just sent to you</p>
                    <p>If you don't receive our confirmation email in your inbox, please check your Bulk/Junk/Spam folder, as it may end up there by mistake, and Please indicate it as " Not Spam" so that future emails will not be blocked</p>
                    <p className='mt10'> Thank you,</p>
                    <p>Team Consolespots</p>
                   </div>
                </div>
            )}
        </div>
    );
}
 
export default VerifyEmail;
 