import React, { useContext, useRef, useState, useEffect } from "react";
import { StyledBuyIntd } from "./BuyIntd.styles";
import Image from "next/image";
import Button from "../Button";
import { useRouter } from "next/router";
import Form from "../molecules/Form/Form";
import Field from "../molecules/Field";
import { useForm } from "../molecules/Form";
import { SubmitContext } from "@/context/SubmitContext";
import Toast from "../molecules/Toast";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import authService from "@/services/authService";
import arrow from "@/assets/images/bidirectional-arrow.svg";
import logo from "@/assets/images/logo-sm.svg";
import CardForm from "@/components/Billing/CardForm"; // Import CardForm component

const currencies = [
  { label: "USD", value: "USD", symbol: "$" },
  { label: "EUR", value: "EUR", symbol: "€" },
];

const BuyIntd = () => {
  const router = useRouter();
  const [currency, setCurrency] = useState(currencies[0]);
  const [step, setStep] = useState(1);
  const { handleData } = useContext(SubmitContext);
  const [amount, setAmount] = useState("");
  const [intd, setIntd] = useState(0);
  const [stripePromise, setStripePromise] = useState(null);
  const childRef = useRef();
  const [form] = useForm();
  const [loading, setLoading] = useState(false);

  // Load Stripe publishable key on mount
  // useEffect(() => {
  //   authService
  //     .getStripeConfig()
  //     .then(({ publishableKey }) => {
  //       if (!publishableKey) throw new Error("Publishable key missing");
  //       setStripePromise(loadStripe(publishableKey));
  //     })
  //     .catch((e) =>
  //       Toast({
  //         type: "warning",
  //         message: e?.message || "Payment key not found",
  //       })
  //     );
  // }, []);

  useEffect(() => {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

    if (!publishableKey) {
      Toast({
        type: "error",
        message: "Stripe publishable key missing in environment file",
      });
      return;
    }

    setStripePromise(loadStripe(publishableKey));
  }, []);

  const success = {
    heading: "Payment Successful!",
    text: `Congratulations! Your purchase of ${intd} INTD$ was successful`,
    btnText: "Go to Dashboard!",
    onClick: () => router.push("/"),
  };

  const processObj = {
    heading: "Request in Process...",
    text: "Your payment is processing. Please wait...",
    inProcess: true,
  };

  const handleSubmit = async (values) => {
    if (!childRef.current) {
      Toast({ type: "error", message: "Card form not ready." });
      return;
    }

    setLoading(true);

    try {
      const tokenId = await childRef.current.createCardToken(
        values.card_holder_name
      );
      // console.log("Token id from stripe >> ", tokenId);

      const payload = {
        token: tokenId,
        amount: Number(amount) * 100,
        amountIntd: intd,
        postalCode: values?.postalCode,
        card_holder_name: values.card_holder_name,
      };

      handleData(processObj);

      const response = await authService.createPaymentIntent(payload);
      // console.log("Response from payment >> ", response);

      if (response.success) {
        Toast({ type: "success", message: "Payment Successful" });
        handleData(success);

        // console.log("Transaction ID:", response.transaction?.id);
      } else {
        throw new Error(response.error || "Payment failed");
      }
    } catch (error) {
      console.error("Payment error:", error);
      Toast({
        type: "error",
        message: error.message || "Payment failed. Please try again.",
      });
      handleData({});
    } finally {
      setLoading(false);
    }
  };
  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === "" || (!Number.isNaN(Number(value)) && Number(value) >= 0)) {
      setAmount(value);
      setIntd(calculateIndtByUsdt(Number(value)));
    } else {
      Toast({ type: "info", message: "Amount should be a valid number" });
    }
  };

  const calculateIndtByUsdt = (usd) => usd * 20;

  return (
    <StyledBuyIntd>
      {step === 1 && (
        <div className="wrapper">
          <h1 className="h3">Buy INTD$!</h1>
          <div className="cards-holder">
            <div className="card">
              <span className="head-text">You Pay</span>
              <div className="currency-holder">
                <div className="select">
                  <Field
                    type="select"
                    value={currency}
                    options={currencies}
                    onChange={(e) => setCurrency(e.target.value)}
                    prefix={currency.symbol}
                  />
                </div>
                <h3>
                  <Field
                    type="text"
                    value={amount}
                    placeholder={"Enter Amount $20 - $250"}
                    onChange={handleAmountChange}
                    prefix={"$"}
                  />
                </h3>
              </div>
              <span className="text">
                The current exchange rate is $1 (USDT) = 1.00 INTD$
              </span>
            </div>
            <div className="arrow-holder">
              <figure className="icon-holder">
                <Image src={arrow} alt="arrow" />
              </figure>
            </div>
            <div className="card">
              <span className="head-text">You Get</span>
              <div className="currency-holder">
                <div className="currency-name">
                  <figure className="img-holder">
                    <Image src={logo} alt="dollarCoin" />
                  </figure>
                  <span className="heading">INTD$</span>
                </div>
                <h3>
                  {intd.toFixed(2)} <span>INTD$</span>
                </h3>
              </div>
              <span className="text">
                You will receive {intd.toFixed(2)} INTD$, with a processing time
                of approximately 05 minutes.
              </span>
            </div>
          </div>
          <div className="btn-holder">
            <Button
              width="400px"
              type="button"
              onClick={() => {
                const numericAmount = Number(amount);
                if (numericAmount < 20 || numericAmount > 250) {
                  Toast({
                    type: "info",
                    message: "Enter Amount Between $20 and $250",
                  });
                  return;
                }
                setStep(2);
              }}
            >
              Buy INTD$
            </Button>
          </div>
          <div className="btn-holder">
            <button onClick={() => router.push("/")}>Go Back!</button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="wrapper">
          <h1 className="h3">Add Card Details!</h1>
          <Form form={form} onSubmit={handleSubmit}>
            <Form.Item
              label="Cardholder Name"
              type="text"
              name="card_holder_name"
              placeholder="John Doe"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Field />
            </Form.Item>

            {stripePromise && (
              <Elements stripe={stripePromise}>
                <CardForm ref={childRef} setLoading={setLoading} />
              </Elements>
            )}

            <Form.Item
              label="Billing Zip/Postal Code"
              type="number"
              name="postalCode"
              placeholder="12345"
              rules={[
                { required: true, message: "Please enter your postal code" },
              ]}
            >
              <Field />
            </Form.Item>

            <Button type="submit" loader={loading}>
              Pay ${amount} Securely
            </Button>
          </Form>
          <div className="btn-holder">
            <button type="button" onClick={() => setStep(1)}>
              Go Back!
            </button>
          </div>
        </div>
      )}
    </StyledBuyIntd>
  );
};

export default BuyIntd;
