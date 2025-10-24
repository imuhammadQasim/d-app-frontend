import React, { forwardRef, useImperativeHandle } from "react";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import Toast from "@/components/molecules/Toast";
import { CardFormStyle } from "@/components/Billing/cardFormStyle.js";
import { useStripeOptions } from "@/utils/useStripeOptions";

const CardForm = forwardRef(({ setLoading }, ref) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useStripeOptions();

  const createCardToken = async (fullName) => {
    if (!stripe || !elements) {
      Toast({ type: "error", message: "Stripe not fully loaded yet" });
    }

    const cardElement = elements.getElement(CardNumberElement);
    if (!cardElement) {
      Toast({ type: "error", message: "Card field is missing" });
    }

    const { token, error } = await stripe.createToken(cardElement, {
      name: fullName,
    });

    if (error) {
      Toast({
        type: "error",
        message: error.message || "Failed to create token",
      });
      return null;
    }

    return token.id;
  };

  useImperativeHandle(ref, () => ({
    createCardToken,
  }));

  return (
    <CardFormStyle>
      <div className="stripe-fields">
        <div className="stripe-input">
          <label htmlFor="card_number">Card Number</label>
          <CardNumberElement
            options={options}
            id="card_number"
            className="card-element"
          />
        </div>
        <div className="two-col expiry-col">
          <div className="stripe-input">
            <label htmlFor="expiry">Expiry</label>
            <CardExpiryElement
              id="expiry"
              options={options}
              className="card-element"
            />
          </div>
          <div className="stripe-input">
            <label htmlFor="cvc">CVC</label>
            <CardCvcElement
              id="cvc"
              options={options}
              className="card-element"
            />
          </div>
        </div>
      </div>
    </CardFormStyle>
  );
});

CardForm.displayName = "CardForm";
export default CardForm;
