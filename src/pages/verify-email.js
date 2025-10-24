import LoginTemplate from "@/components/LoginTemplate";
import { AuthContext } from "@/context/AuthContext";
import OtpInput from "@/components/Otp";
import React, { useContext, useState, useEffect } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import { getCookie } from "@/helpers/common";
import authService from "@/services/authService";
import Toast from "@/components/molecules/Toast";

const VerifyEmail = () => {
  const router = useRouter();
  const [otpValue, setOtpValue] = useState(new Array(6).fill(""));
  const { verifyEmail } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const token = getCookie(process.env.NEXT_PUBLIC_CRM_TOKEN_COOKIE);
        if (!token) {
          router.push("/login");
          return;
        }
        const user = await authService.fetchUserDetails();
        if (user?.code === 200) {
          setUserEmail(user?.user?.email);
        } else {
          router.push("/login");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        router.push("/login");
      }
    };

    fetchUserEmail();
  }, []);

  async function handleVerifyEmail() {
    const enteredOtp = otpValue.join("").trim();

    if (enteredOtp.length < 6 || otpValue.includes("")) {
      Toast({ type: "error", message: "Please enter a valid 6-digit OTP." });
      return;
    }
    const payload = {
      email: userEmail,
      code: otpValue.join(""),
    };
    const success = await verifyEmail(payload);
    if (success) {
      router.push("/kyc-verification");
    }
  }

  return (
    <LoginTemplate>
      <span className="heading">Verify OTP!</span>
      <p>
        We’ve sent a 6-digit OTP to your mail{" "}
        <strong>{userEmail || "loading..."}</strong>
      </p>
      <OtpInput setOtpValue={setOtpValue} email={userEmail} />
      <Button width="100%" type="button" onClick={handleVerifyEmail}>
        Verify OTP
      </Button>
    </LoginTemplate>
  );
};

export default VerifyEmail;
