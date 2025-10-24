import React, { useContext, useState, useEffect } from "react";
import LoginTemplate from "@/components/LoginTemplate";
import { useForm } from "@/components/molecules/Form";
import Form from "@/components/molecules/Form/Form";
import emailIcon from "@/assets/images/email-icon.svg";
import passwordIcon from "@/assets/images/password-icon.svg";
import Image from "next/image";
import Field from "@/components/molecules/Field";
import Button from "@/components/Button";
import OtpInput from "@/components/Otp";
import Process from "@/components/Process";
import authService from "@/services/authService";
import Toast from "@/components/molecules/Toast";
import { AuthContext } from "@/context/AuthContext";
import { SubmitContext } from "@/context/SubmitContext";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";

const ForgotPassword = () => {
  const [form] = useForm();
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [otpValue, setOtpValue] = useState(new Array(6).fill(""));
  const { verifyEmail } = useContext(AuthContext);
  const { handleData } = useContext(SubmitContext);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedStep = parseInt(sessionStorage.getItem("forgotStep")) || 1;
      const savedEmail = sessionStorage.getItem("rememberedEmail") || "";

      setStep(savedStep);
      setEmail(savedEmail);
    }
  }, []);

  const processObj = {
    heading: "Request in Process...",
    text: "Your password reset request is in processing, \nplease wait a bit.",
    inProcess: true,
  };

  const error = {
    heading: "Request Error!",
    text: "Opppsss..... It seems we cannot process your \nrequest, you can try again. ",
    error: true,
    btnText: "Request again",
  };

  const success = {
    heading: "Request Successful!",
    text: "Your password has been successfully \nupdated.",
    btnText: "Login again",
    onClick: () => router.push("/login"),
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("forgotStep", step);
    }
  }, [step]);

  async function handleSubmit(e) {
    if (step === 1) {
      const payload = {
        email: e.email,
        forgot: true,
      };
      try {
        const res = await authService.forgotPassword(payload);
        sessionStorage.setItem("rememberedEmail", e.email);
        setEmail(e.email);
        Toast({ type: "success", message: res.message });
        setStep(2);
      } catch (error) {
        Toast({ type: "error", message: error.message });
      }
    } else if (step === 2) {
      try {
        const userEmail = sessionStorage.getItem("rememberedEmail");
        const payload = {
          email: userEmail,
          code: otpValue.join(""),
          forgot: true,
        };
        // const success = await verifyEmail(payload);
        const res = await authService.verifyEmail(payload);
        Toast({ type: "success", message: res.message });
        if (res.success) {
          setStep(3);
        }
      } catch (error) {
        Toast({ type: "error", message: error.message });
      }
    } else if (step === 3) {
      const payload = {
        password: e.confirm_password,
      };
      try {
        handleData(processObj);
        await authService.resetPassword(payload);
        handleData(success);
        setStep(4);
        sessionStorage.removeItem("forgotStep");
        sessionStorage.removeItem("rememberedEmail");
      } catch {
        handleData(error);
      }
    }
  }

  return (
    <>
      {step !== 4 && (
        <LoginTemplate>
          <Form form={form} onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <span className="heading">Forgot Password!</span>
                <p>
                  Please enter your registered email address below to initiate
                  password reset request.
                </p>
                <Form.Item
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  prefix={<Image src={emailIcon} alt="emailIcon" />}
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email address ",
                    },
                  ]}
                >
                  <Field />
                </Form.Item>
                <Button width="100%" loader={loading}>
                  Send OTP
                </Button>
              </>
            )}
            {step === 2 && (
              <>
                <span className="heading">Verify OTP!</span>
                <p>We’ve sent an 6-digit otp to your mail {email}</p>
                <OtpInput setOtpValue={setOtpValue} />
                <Button width="100%">Verify OTP</Button>
              </>
            )}
            {step === 3 && (
              <>
                <Form.Item
                  label="New Password"
                  type="password"
                  name="new_password"
                  placeholder="Enter new password"
                  prefix={<Image src={passwordIcon} alt="passwordIcon" />}
                  rules={[
                    {
                      required: true,
                    },
                    { password: true },
                  ]}
                >
                  <Field />
                </Form.Item>
                <Form.Item
                  label="Confirm Password"
                  type="password"
                  name="confirm_password"
                  placeholder="confirm new password"
                  prefix={<Image src={passwordIcon} alt="passwordIcon" />}
                  rules={[
                    {
                      required: true,
                    },
                    {
                      transform: (value) =>
                        value !== form.getFieldValue("new_password"),
                    },
                  ]}
                >
                  <Field />
                </Form.Item>
                <Button width="100%">Reset my password</Button>
              </>
            )}
          </Form>
        </LoginTemplate>
      )}
      {step === 4 && <Process />}
    </>
  );
};

export default ForgotPassword;
