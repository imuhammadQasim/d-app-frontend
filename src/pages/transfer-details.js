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

const TransferDetails = () => {
  const { form } = useForm();
  const router = useRouter();
  const [checkbox, setCheckbox] = useState(false);
  const [step, setStep] = useState(1);
  function handleSubmit() {
    setStep(2);
  }

  return (
    <>
      {step === 1 && (
        <StyledUpdate>
          <>
            <h1>Transfer to a friend/family member!</h1>
            <p>
              You can transfer your funds to friends or family on INTD$. If
              they’re not <br /> registered, we'll send them a sign-up link, and
              your money will remain <br /> secure with us until the transfer is
              complete.
            </p>
            <Form form={form} onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <Form.Item
                  label="Friend/Family Member Name"
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter name ",
                    },
                  ]}>
                  <Field />
                </Form.Item>
                <Form.Item
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="Enter recipient email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter email ",
                    },
                  ]}>
                  <Field />
                </Form.Item>
                <Form.Item
                  label="I am voluntarily transferring all of my money to this member."
                  type="checkbox"
                  name="money_transfer"
                  value={checkbox}
                  onChange={(e) => setCheckbox(e.target.value)}
                  noMargin>
                  <Field />
                </Form.Item>
              </div>
              <div className="btn-holder">
                <Button width="400px">Proceed!</Button>
              </div>
              <div
                className="btn-holder"
                onClick={() => router.push("/settings")}>
                <button>Go Back!</button>
              </div>
            </Form>
          </>
        </StyledUpdate>
      )}
      {step === 2 && (
        <Process
          gif={warningGif}
          heading="Warning!"
          text={
            <>
              You are about to transfer your all money to <br />
              johnduo@gmail.com. Please note this action <br /> cannot be
              undone.
            </>
          }
          btnText="Transfer Now!"
          onClick={() => setStep(3)}
          backBtn={() => setStep(1)}
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

export default TransferDetails;
