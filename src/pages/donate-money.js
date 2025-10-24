import Button from "@/components/Button";
import Field from "@/components/molecules/Field";
import Form from "@/components/molecules/Form/Form";
import React, { useState } from "react";
import { StyledUpdate } from "./_app";
import { useForm } from "@/components/molecules/Form";
import { useRouter } from "next/router";
import warningGif from "@/assets/images/warning-gif.gif";
import successGif from "@/assets/images/request-successful-gif.gif";
import processGif from "@/assets/images/inProcess-gif.gif";
import Process from "@/components/Process";

const DonateMoney = () => {
  const { form } = useForm();
  const router = useRouter();
  const [checkbox, setCheckbox] = useState(false);
  const [checkboxTwo, setCheckboxTwo] = useState(false);
  const [step, setStep] = useState(1);
  function handleSubmit() {
    setStep(5);
  }

  return (
    <>
      {step === 1 && (
        <StyledUpdate>
          <>
            <h1>Donate my Money!</h1>
            <p>
              Rest assured, your donation will be directed to the right place.
              For <br /> more information, please visit the link to learn more.
            </p>
            <Form form={form} onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <Form.Item
                  label="Your Name"
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter name ",
                    },
                  ]}
                >
                  <Field />
                </Form.Item>
                <Form.Item
                  label="Donation Note (Optional)"
                  type="textarea"
                  name="note"
                  placeholder="Write..."
                >
                  <Field />
                </Form.Item>
                <Form.Item
                  label="I am voluntarily donating all of my money to this International Digital Dollar."
                  type="checkbox"
                  name="checkbox_1"
                  value={checkbox}
                  onChange={(e) => setCheckbox(e.target.value)}
                >
                  <Field />
                </Form.Item>
                <Form.Item
                  label="I know that this action cannot be undone"
                  type="checkbox"
                  name="checkbox_2"
                  value={checkboxTwo}
                  onChange={(e) => setCheckboxTwo(e.target.value)}
                  noMargin
                >
                  <Field />
                </Form.Item>
              </div>
              <div className="btn-holder">
                <Button width="400px">Proceed!</Button>
              </div>
              <div
                className="btn-holder"
                onClick={() => router.push("/settings")}
              >
                <button>Go Back!</button>
              </div>
            </Form>
          </>
        </StyledUpdate>
      )}
      {step === 2 && (
        <Process
          gif={processGif}
          heading="Donation in Process..."
          text={
            <>
              Your account deactivation is in processing,
              <br /> please wait a bit.
            </>
          }
          inProcess
        />
      )}
      {step === 3 && (
        <Process
          gif={successGif}
          heading="Transfer Request Successful!"
          text={
            <>
              Your request of transferring your money to <br /> John Duo
              (johnduo@gmail.com) has been <br /> to sent successfully.
            </>
          }
          btnText="Deactivate my Account Now!"
          variant={"danger"}
          onClick={() => setStep(4)}
        />
      )}
      {step === 4 && (
        <Process
          gif={processGif}
          heading="Deactivation in Process..."
          text={
            <>
              Your account deactivation is in processing,
              <br /> please wait a bit.
            </>
          }
          inProcess
        />
      )}
      {step === 5 && (
        <Process
          gif={successGif}
          heading="Deactivation Successful!"
          text={
            <>
              Your account has been successfully deactivated. You <br /> are no
              longer a part of the INTD$ community.
            </>
          }
        />
      )}
    </>
  );
};

export default DonateMoney;
