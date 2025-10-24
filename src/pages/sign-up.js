import React, { useState, useEffect } from "react";
import emailIcon from "@/assets/images/email-icon.svg";
import passwordIcon from "@/assets/images/password-icon.svg";
import LoginTemplate from "@/components/LoginTemplate";
import Field from "@/components/molecules/Field";
import Form from "@/components/molecules/Form/Form";
import { useForm } from "@/components/molecules/Form";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import authService from "@/services/authService";
import Toast from "@/components/molecules/Toast";
import { useRouter } from "next/router";
import { setCookie } from "@/helpers/common";
const SignUp = () => {
  const [form] = useForm();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  async function handleSubmit(e) {
    const payload = {
      first_name: e.first_name,
      last_name: e.last_name,
      email: e.email,
      password: e.confirm_password,
      type: "signup",
    };
    if (e.new_password !== e.confirm_password) {
      Toast({
        type: "error",
        message: "New Password and Confirm password do not match",
      });
      return;
    }

    try {
      const res = await authService.signUp(payload);
      // console.log("response is > ", res);

      setCookie(process.env.NEXT_PUBLIC_CRM_TOKEN_COOKIE, res?.token);

      Toast({
        type: "success",
        message: res.message,
      });

      router.push("/verify-email");
    } catch (error) {
      console.log("Registration error is >> ", error);

      let errorMessage = error.message || "Registration failed";

      if (error.status === 409) {
        errorMessage = "An account with this email already exists";
      } else if (error.status === 400) {
        errorMessage = "Invalid input data. Please check your information";
      }

      Toast({
        type: "error",
        message: errorMessage,
      });
    }
  }
  if (!isClient) {
    return null;
  }

  return (
    <LoginTemplate>
      <Form form={form} onSubmit={handleSubmit}>
        <span className="heading">Create Account!</span>
        <p>
          Kindly provide the following details to proceed with your account
          creation request.
        </p>
        <div className="sign-up-head">
          <Form.Item
            label="First Name"
            type="text"
            name="first_name"
            placeholder="Enter first name"
            rules={[
              {
                required: true,
                message: "Please enter first name",
              },
            ]}
          >
            <Field />
          </Form.Item>
          <Form.Item
            label="Last Name"
            type="text"
            name="last_name"
            placeholder="Enter last name"
            rules={[
              {
                required: true,
                message: "Please enter last name ",
              },
            ]}
          >
            <Field />
          </Form.Item>
        </div>
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
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("new_password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Field />
        </Form.Item>
        <Button width="100%" className="btn">
          Create my Account
        </Button>
        <span className="create-account">
          Already have an account?&nbsp;
          <Link href="/login">Sign In</Link>
        </span>
      </Form>
    </LoginTemplate>
  );
};

export default SignUp;
