import React, { useState } from "react";
import LoginTemplate from "@/components/LoginTemplate";
import Field from "@/components/molecules/Field";
import Form from "@/components/molecules/Form/Form";
import { useForm } from "@/components/molecules/Form";
import Button from "@/components/Button";
import authService from "@/services/authService";
import Toast from "@/components/molecules/Toast";
import { useRouter } from "next/router";

const KycVerification = () => {
  const [form] = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    const formData = new FormData();
    formData.append("document_front_side", e.front_picture);
    formData.append("document_back_side", e.back_picture);

    try {
      setLoading(true);
      const res = await authService.verifyKyc(formData);
      router.push("/payment-method");
      Toast({ type: "success", message: res.message });
    } catch (error) {
      Toast({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  }
  return (
    <LoginTemplate>
      <Form form={form} onSubmit={handleSubmit}>
        <span className="heading">KYC Verification!</span>
        <p>
          Please provide a front and back picture of your passport to verify
          your identity.
        </p>
        <Form.Item
          type="img"
          uploadTitle="Upload the front side"
          disc=""
          name="front_picture"
          placeholder="Enter first name"
          rules={[
            {
              required: false,
              message: "Please upload front picture of your passport",
            },
          ]}
        >
          <Field />
        </Form.Item>
        <Form.Item
          type="img"
          uploadTitle="Upload the back side"
          disc=""
          name="back_picture"
          placeholder="Enter first name"
          rules={[
            {
              required: false,
              message: "Please upload back picture of your passport",
            },
          ]}
        >
          <Field />
        </Form.Item>
        <Button width="100%" loader={loading}>
          Complete Verification
        </Button>
      </Form>
    </LoginTemplate>
  );
};

export default KycVerification;
