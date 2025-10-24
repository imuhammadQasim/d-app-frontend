import Button from "@/components/Button";
import Field from "@/components/molecules/Field";
import Form from "@/components/molecules/Form/Form";
import React, { useState } from "react";
import { StyledUpdate } from "./_app";
import { useForm } from "@/components/molecules/Form";
import { useRouter } from "next/router";
import Process from "@/components/Process";

const UpdateName = () => {
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
          <h1>Update Name!</h1>
          <p>You can update your name once in every month.</p>
          <Form form={form} onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <Form.Item
                label="First Name"
                type="text"
                name="first_name"
                placeholder="Enter your first name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your first name ",
                  },
                ]}>
                <Field />
              </Form.Item>
              <Form.Item
                label="Last Name"
                type="text"
                name="last_name"
                placeholder="Enter your last name"
                noMargin
                rules={[
                  {
                    required: true,
                    message: "Please enter your last name ",
                  },
                ]}>
                <Field />
              </Form.Item>
            </div>
            <div className="btn-holder">
              <Button width="400px">Update Name!</Button>
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

export default UpdateName;
