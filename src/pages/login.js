"use client";
import React, { useContext, useEffect, useState } from "react";
import Button from "@/components/Button";
import LoginTemplate from "@/components/LoginTemplate";
import Field from "@/components/molecules/Field";
import { useForm } from "@/components/molecules/Form";
import Form from "@/components/molecules/Form/Form";
import emailIcon from "@/assets/images/email-icon.svg";
import passwordIcon from "@/assets/images/password-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { LoadingContext } from "@/context/loadingContext";
const Login = () => {
  const [form] = useForm();
  const [checkbox, setCheckbox] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // 👈 New state to track mounting
  const { onLogin } = useContext(AuthContext);
  const router = useRouter();
  // const {loading,setLoading} = useContext(LoadingContext);
  async function handleSubmit(values) {
    // setLoading(true);
    await onLogin(values, checkbox);
    // setLoading(false);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    form.setFieldsValue({
      [name]: value,
    });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <LoginTemplate>
        <span className="heading">Login to your Account!</span>
        <p>You've been missed! Log in to your account below to reconnect.</p>
        <div style={{ minHeight: "300px" }}></div>
      </LoginTemplate>
    );
  }

  return (
    <LoginTemplate>
      <span className="heading">Login to your Account!</span>
      <p>You've been missed! Log in to your account below to reconnect.</p>
      <Form form={form} onSubmit={handleSubmit}>
        <Form.Item
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
          name="email"
          onChange={handleChange}
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
          label="Password"
          placeholder="Enter your password"
          type="password"
          name="password"
          prefix={<Image src={passwordIcon} alt="passwordIcon" />}
          rules={[
            {
              required: true,
              message: "Please enter password ",
            },
          ]}
        >
          <Field />
        </Form.Item>
        <div className="login-form-footer">
          <Form.Item
            label="Remember me"
            type="checkbox"
            name="remember"
            value={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
            noMargin
          >
            <Field />
          </Form.Item>
          <Link href="/forgot-password">Forgot Password?</Link>
        </div>
        <Button width="100%" className="btn">
          Login
        </Button>
        <span className="create-account">
          Don’t have an account yet?&nbsp;
          <Link href="/sign-up">Create One</Link>
        </span>
      </Form>
    </LoginTemplate>
  );
};

export default Login;
