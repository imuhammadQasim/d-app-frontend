import React from "react";
import { useRouter } from "next/router";
import LoginTemplate from "@/components/LoginTemplate";
import Image from "next/image";
import USDT from "@/assets/images/paymentUSDT.png";
import USDTbtn from "@/assets/images/paymentUSDTbtn.png";
import { useActiveAccount, ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { client } from "@/utils/clientThirdWeb.js";
import { USDTStyled } from "@/styles/paymentUsdtStyle.js";

const PaymentUSDT = () => {
  const router = useRouter();
  const account = useActiveAccount();

  const wallets = [
    createWallet("com.trustwallet.app"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
  ];

  const handleUSDTpayment = () => {
    router.push("/USDT-payment-procedure");
  };

  return (
    <USDTStyled>
      <LoginTemplate hideLogo>
        <div className="paymentUSDT">
          <div className="paymentUSDTContent">
            <Image src={USDT} alt="" />
            <h5>USDT Payment</h5>
          </div>
          <p>Connect your wallet to pay with USDT</p>

          <div className="wallet-button-div">
            {!account && <Image className="wallet-img" src={USDTbtn} alt="" />}
            <ConnectButton
              onConnect={handleUSDTpayment}
              theme="light"
              client={client}
              wallets={wallets}
              autoConnect
            />
          </div>
        </div>
      </LoginTemplate>
    </USDTStyled>
  );
};

export default PaymentUSDT;
