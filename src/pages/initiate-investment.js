import React, { useState } from "react";
import investImg from "@/assets/images/invest-img.svg";
import Image from "next/image";
import Field from "@/components/molecules/Field";
import Button from "@/components/Button";
import processGif from "@/assets/images/inProcess-gif.gif";
import { useRouter } from "next/router";
import Process from "@/components/Process";
import successGif from "@/assets/images/request-successful-gif.gif";
import { StyledInitiateInvestment } from "@/styles/InitiateInvestment.styles";

const InitiateInvestment = () => {
  const router = useRouter();
  const [checkbox, setCheckbox] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <StyledInitiateInvestment>
      {step === 1 && (
        <>
          <h1>Initiate Investment!</h1>
          <div className="invest">
            <Image src={investImg} alt="investImg" />
            <span className="heading"> Invest 200 INTD$!</span>
            <p>
              Invest 200 INTD$ on ByBit or Binance platform and <br /> get 1,000
              INTD$ till 27th jan 2025
            </p>
            <span className="amount">
              200.00 <span>INTD$</span>
            </span>
            <div className="checkbox-holder">
              <Field
                label="I am voluntarily choosing to invest in this opportunity."
                type="checkbox"
                name="checkbox"
                value={checkbox}
                onChange={(e) => setCheckbox(e.target.value)}
                noMargin
              />
            </div>
          </div>
          <div className="btn-wrapper">
            <Button width="400px" onClick={() => setStep(2)}>
              Proceed
            </Button>
          </div>
          <div className="btn-wrapper">
            <button onClick={() => router.push("/")}>Go back</button>
          </div>
        </>
      )}
      {step === 2 && (
        <Process
          gif={processGif}
          heading="Investment in Process..."
          text={
            <>
              Your investment of INTD$ 200.00 is <br /> processing, please wait
              a bit.
            </>
          }
          inProcess
        />
      )}
      {step === 3 && (
        <Process
          gif={successGif}
          heading={
            <>
              Investment Initiated <br /> Successfully!
            </>
          }
          text={
            <>
              Congratulations, your investment of INTD$ 200.00 <br /> is
              successfully initiated.
            </>
          }
          btnText="Go to Dashboard!"
          onClick={() => router.push("/")}
        />
      )}
    </StyledInitiateInvestment>
  );
};

export default InitiateInvestment;
