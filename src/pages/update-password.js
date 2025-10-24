import Button from "@/components/Button";
import Field from "@/components/molecules/Field";
import Form from "@/components/molecules/Form/Form";
import React, { useState } from "react";
import { StyledUpdate } from "./_app";
import { useForm } from "@/components/molecules/Form";
import { useRouter } from "next/router";
import Process from "@/components/Process";

const UpdatePassword = () => {
  const { form } = useForm();
  const router = useRouter();
  const [step, setStep] = useState(1);
  function handleSubmit() {
    setStep(2);
  }

  return (
    <StyledUpdate>
      {step === 1 && (
        <>
          <h1>Update Password!</h1>
          <p>
            You can update your password once <br /> in every month.
          </p>
          <Form form={form} onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <Form.Item
                label="New Password"
                type="password"
                name="new_password"
                placeholder="Enter new password"
                rules={[
                  {
                    required: true,
                  },
                  { password: true },
                ]}>
                <Field />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                type="password"
                name="confirm_password"
                placeholder="confirm new password"
                rules={[
                  {
                    required: true,
                  },
                  //   {
                  //     transform: (value) =>
                  //       value !== form.getFieldValue("new_password"),
                  //   },
                ]}>
                <Field />
              </Form.Item>
              <Form.Item
                label="Current Password"
                type="password"
                name="current_password"
                placeholder="Enter current password"
                rules={[
                  {
                    required: true,
                    message: "Please enter current password",
                  },
                ]}>
                <Field />
              </Form.Item>
            </div>
            <div className="btn-holder">
              <Button width="400px">Update Password!</Button>
            </div>
            <div
              className="btn-holder"
              onClick={() => router.push("/settings")}>
              <button>Go Back!</button>
            </div>
          </Form>
        </>
      )}
      {step === 2 && <Process />}
    </StyledUpdate>
  );
};

export default UpdatePassword;
