import React, { useState } from "react";
import walletGif from "@/assets/images/wallet-gif.gif";
import cartIcon from "@/assets/images/cart-icon.svg";
import Image from "next/image";
import Button from "@/components/Button";
import MyWalletTable from "@/components/Wallet/MyWalletTable";
import CheckingDropdown from "@/components/CheckingDropdown";
import WalletCard from "@/components/Wallet/WalletCard";
import walletIcon from "@/assets/images/wallet-icon.svg";
import savingIcon from "@/assets/images/saving-icon.svg";
import rothIcon from "@/assets/images/roth-icon.svg";
import { useRouter } from "next/router";
import { StyledWallet } from "@/components/Wallet/Wallet.styles";

const cardsData = [
  {
    topText: "Total INTD$",
    totalPrice: "500.00",
    weekPrice: "00.00",
    weekPercent: "00.00",
    monthPrice: "00.00",
    monthPercent: "00.00",
    purchase: true,
  },
  {
    topText: "Total Invested INTD$",
    totalPrice: "00.00",
    weekPrice: "00.00",
    weekPercent: "00.00",
    monthPrice: "00.00",
    monthPercent: "00.00",
  },
];

const filters = [
  {
    icon: walletIcon,
    label: "Checking",
    price: "00.00",
  },
  {
    icon: savingIcon,
    label: "Savings",
    price: "00.00",
  },
  {
    icon: rothIcon,
    label: "Roth",
    price: "00.00",
  },
];

const MyWallet = () => {
  const router = useRouter();
  return (
    <StyledWallet>
      <div className="wallet-head">
        <div className="heading-holder">
          <Image src={walletGif} alt="walletGif" />
          <h1>My Wallets</h1>
        </div>
        <div className="btn-holder">
          <Button onClick={() => router.push("/buy-intd")}>
            <Image src={cartIcon} alt="cartIcon" />
            Buy INTD$
          </Button>
          <CheckingDropdown arr={filters} />
        </div>
      </div>
      <div className="content-holder">
        <div className="cards-holder">
          <WalletCard arr={cardsData} />
        </div>
        <div className="table-holder">
          <MyWalletTable />
        </div>
      </div>
    </StyledWallet>
  );
};

export default MyWallet;
