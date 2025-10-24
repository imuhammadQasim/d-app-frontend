import React, { useContext, useRef, useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useForm } from "@/components/molecules/Form";
import Form from "@/components/molecules/Form/Form";
import Field from "@/components/molecules/Field";
import Button from "@/components/Button";
import Toast from "@/components/molecules/Toast";
import CardForm from "@/components/Billing/CardForm";
import LoginTemplate from "@/components/LoginTemplate";
import authService from "@/services/authService";
import { SubmitContext } from "@/context/SubmitContext";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";

export default function CreditBilling() {
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const [stripePromise, setStripePromise] = useState(null);
  const childRef = useRef();
  const { handleData } = useContext(SubmitContext);
  const router = useRouter();
  const { refreshUser } = useContext(AuthContext);

  const success = {
    heading: "Payment Successful!",
    text: "Congratulations! Your purchase of 50 INTD$ was successful",
    btnText: "Go to Dashboard!",
    onClick: () => {
      router.push("/");
    },
  };

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

  const handleSubmit = async (values) => {
    if (!childRef.current) return;
    setLoading(true);

    try {
      // 1. Get card token
      const tokenId = await childRef.current.createCardToken(
        values.card_holder_name
      );

      // 2. Call backend with token
      const payload = {
        token: tokenId,
        amount: 499,
        postalCode: values?.postalCode,
      };
      const response = await authService.payment(payload);

      if (!response?.success) {
        Toast({
          type: "error",
          message: response?.message || "Payment failed",
        });
      } else if (response?.success) {
        setLoading(false);
        console.log("Payment Response: ", response);
        Toast({ type: "success", message: "Payment Successful" });
        await refreshUser();
        // handleData(success);
        router.push("/");
      }
    } catch (error) {
      Toast({ type: "error", message: error.message || "Payment failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginTemplate hideLogo>
      <div className="creditCardForm">
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
            Pay $4.99 Securely
          </Button>
        </Form>
      </div>
    </LoginTemplate>
  );
}
