import React, { useState } from "react";
import { StyledAccountDeActive } from "./Settings.styles";
import walletIcon from "@/assets/images/primary-wallet-icon.svg";
import dollarIcon from "@/assets/images/primary-dollar-icon.svg";
import Image from "next/image";
import Button from "../Button";
import { useRouter } from "next/router";

const cardsData = [
  {
    icon: walletIcon,
    amount: "12.700,00",
    text: "Checking",
  },
  {
    icon: dollarIcon,
    amount: "12.700,00",
    text: "Serving",
  },
  {
    icon: walletIcon,
    amount: "12.700,00",
    text: "Roth",
  },
];

const AccountDeActive = () => {
  const router = useRouter();
  const [tab, setTab] = useState(1);

  function handleDeactiveAccount() {
    if (tab === 1) {
      router.push("/transfer-details");
    } else if (tab === 2) {
      router.push("/donate-money");
    }
  }

  return (
    <StyledAccountDeActive>
      <div className="head">
        <span className="heading">Account Deactivation!</span>
        <p>You can manage your account deactivation here.</p>
      </div>
      <div className="text-section">
        <span className="title">
          Deactivating your <span>INTD$ </span> account will be result to things
          below:
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
          tincidunt mi. Fusce volutpat venenatis faucibus. Vivamus a nisi enim.
          Sed diam felis, rhoncus ac ante eget, tempus mattis lacus. Morbi
          dapibus placerat lacus. Nulla pellentesque congue quam ac vestibulum.
        </p>
        <p>
          Maecenas ac varius felis. Vivamus hendrerit eleifend felis, euismod
          feugiat odio. Interdum INTD$ fames ac ante ipsum primis in faucibus.
          Mauris id velit quis augue commodo sodales id vitae magna. Praesent
          risus mi, accumsan quis tristique nec, laoreet sit amet nisi. Sed nec
          massa blandit felis vestibulum scelerisque sit amet vel orci. Fusce
          ligula mi, congue nec orci in, consequat laoreet felis. Proin sit amet
          augue sapien. Nullam consequat euismod lorem et ultrices. Aliquam a
          lacus pretium, volutpat mi et, vestibulum mauris.Fusce ligula mi,
          congue nec orci in, consequat laoreet felis. Proin sit.
        </p>
        <p>
          Nulla non turpis quis odio bibendum cursus. Ut vulputate sem nunc.
          Proin eu euismod justo. Sed tortor lectus, hendrerit nec mauris ut,
          vulputate sollicitudin sem. Phasellus varius, neque non finibus
          aliquet, lectus ex pulvinar elit, et vulputate odio massa iaculis
          justo. Duis facilisis finibus sapien, id rhoncus augue porta vitae. In
          lacinia purus eu suscipit ornare. Cras maximus neque at ligula congue
          porta. Vivamus rhoncus ex quis convallis vulputate. Class aptent
          taciti sociosqu ad litora torquent International Digital Dollar
          nostra, per inceptos himenaeos.
        </p>
      </div>
      <div className="balance-summary">
        <span className="title">Your balance summary:</span>
        <p>
          Your current INTD$ balance is $45,256.000 across three wallets:
          Checking, Savings, and Roth. Before deactivating your account, you
          have two options: either transfer your entire balance to another INTD$
          user or donate your INTD$ balance to us. Below is a breakdown of your
          wallet balances.
        </p>
        <div className="cards-holder">
          {cardsData?.map((item, index) => (
            <div className="card" key={index}>
              <div>
                <span className="amount">${item?.amount}</span>
                <span>Total INTD$ ({item?.text})</span>
              </div>
              <Image src={item?.icon} alt="Icon" />
            </div>
          ))}
        </div>
      </div>

      <div className="deactive-section">
        <span className="title">Deactivation Options:</span>
        <p>Choose What to Do With Your Balance.</p>
        <div>
          <div className="tabs-holder">
            <div
              className={tab === 1 ? "tab active" : "tab"}
              onClick={() => setTab(1)}>
              <div className="radio" />
              <span className="text">Transfer to a friend/family member</span>
            </div>
            <div
              className={tab === 2 ? "tab active" : "tab"}
              onClick={() => setTab(2)}>
              <div className="radio" />
              <span className="text">Donate my Money</span>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-holder">
        <Button
          width="250px"
          variant="danger"
          onClick={() => handleDeactiveAccount()}>
          Deactive my Account
        </Button>
      </div>
    </StyledAccountDeActive>
  );
};

export default AccountDeActive;
