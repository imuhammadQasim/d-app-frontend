import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoginTemplate from "@/components/LoginTemplate";
import Image from "next/image";

import USDT from "@/assets/images/pmUSDT.png/";
import CreditCart from "@/assets/images/pmCreditCart.png/";

const PaymentMethod = () => {
  const [selected, setSelected] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (selected === "stripe") {
      router.push("/credit-card-payment");
    } else if (selected === "usdt") {
      router.push("/payment-USDT");
    }
  }, [selected]);

  return (
    <LoginTemplate>
      <div className="paymentMethod">
        <div className="paymentMethodContent">
          <h4>Complete Your Subscription</h4>
          <p>
            Subscribe for just <span>$4.99</span> and gain access to exclusive
            early access features.
          </p>
        </div>

        <div className="paymentMethodCart">
          <h5>Choose Payment Method</h5>

          <label>
            <input
              type="radio"
              name="payment"
              value="stripe"
              checked={selected === "stripe"}
              onChange={() => setSelected("stripe")}
            />
            <Image src={CreditCart} alt="" />
            Pay with Credit Card (Stripe)
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="usdt"
              checked={selected === "usdt"}
              onChange={() => setSelected("usdt")}
            />
            <Image src={USDT} alt="" />
            Pay with USDT (Crypto Wallet)
          </label>
        </div>
      </div>
    </LoginTemplate>
  );
};

export default PaymentMethod;
