import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import authService from "@/services/authService";
import Toast from "../molecules/Toast";
import { OtpInputWrapper } from "./Otp.styles";

const OtpInput = ({
  numInputs = 6,
  inputWidth,
  width,
  inputBg,
  noTimer,
  email,
  setOtpValue = () => {},
}) => {
  const [timeLeft, setTimeLeft] = useState(120);
  const [otp, setOtp] = useState(new Array(numInputs).fill(""));
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  // This useEffect will only run on the client side after the initial render
  useEffect(() => {
    const storedExpirationTime = localStorage.getItem("otpExpirationTime");
    const now = Date.now();

    if (storedExpirationTime) {
      const remaining = Math.max(
        0,
        Math.floor((storedExpirationTime - now) / 1000)
      );
      setTimeLeft(remaining);
    } else {
      // First load → set expiration
      const expirationTime = Date.now() + 120 * 1000;
      localStorage.setItem("otpExpirationTime", expirationTime);
      setTimeLeft(120);
    }
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          localStorage.removeItem("otpExpirationTime");
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleChange = (index, value) => {
    if (otp[index] !== "" && index + 1 === numInputs) {
      return;
    }

    if (otp[index] !== "") {
      if (refs[index + 1]?.current) {
        refs[index + 1].current.focus();
      }

      const newOtp = [...otp];
      const [, second] = value.split("");
      newOtp[index + 1] = second;

      setOtp(newOtp);
      setOtpValue(newOtp);
      return;
    }

    if (parseInt(value, 10) <= 9) {
      const newOtp = [...otp];
      newOtp[index] = value;

      setOtp(newOtp);
      setOtpValue(newOtp);
    }

    if (refs[index + 1]?.current) {
      refs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      e.preventDefault();

      setOtp((prev) => {
        const newOtp = [...prev];
        newOtp[index] = "";
        return newOtp;
      });

      if (refs[index - 1]?.current) {
        refs[index - 1].current.focus();
      }
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await authService.resendOtp();
      Toast({ type: "success", message: res.message });
      setTimeLeft(120);

      // Corrected: Set the expiration time in localStorage here
      const expirationTime = Date.now() + 120 * 1000;
      localStorage.setItem("otpExpirationTime", expirationTime);

      const clearedOtp = new Array(numInputs).fill("");
      setOtp(clearedOtp);
      setOtpValue(clearedOtp);

      if (refs[0]?.current) {
        refs[0].current.focus();
      }
    } catch (error) {
      Toast({ type: "error", message: error.message });
    }
  };

  return (
    <OtpInputWrapper
      $width={width}
      $inputWidth={inputWidth}
      $inputBg={inputBg}
      $disable={timeLeft > 0}
    >
      <div className="otp-fields">
        {otp.map((value, index) => (
          <input
            placeholder="-"
            key={index}
            type="number"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={refs[index]}
          />
        ))}
      </div>
      {noTimer ? (
        ""
      ) : (
        <div className="timer">
          <span
            className={`resend-code ${timeLeft > 0 ? "disabled" : ""}`}
            onClick={handleSubmit}
          >
            Resend OTP
          </span>
          <span> {formatTime(timeLeft)} </span>
        </div>
      )}
    </OtpInputWrapper>
  );
};

export default OtpInput;
