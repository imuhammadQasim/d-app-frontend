import React from "react";
import {
  CardStyled,
  StyledPromotionalRewards,
} from "./PromotionalRewards.styles";
import gif from "@/assets/images/promotion-gif.gif";
import cardImg1 from "@/assets/images/investment-img01.png";
import cardImg2 from "@/assets/images/investment-img02.png";
import cardImg3 from "@/assets/images/investment-img03.png";
import dollarIcon from "@/assets/images/dollar-icon-sm.svg";
import promotionIcon from "@/assets/images/promotion-icon.svg";
import Image from "next/image";
import Button from "@/components/Button";
import { useRouter } from "next/router";

const cardsData = [
  {
    image: cardImg1,
    tag: "Investment",
    tagIcon: dollarIcon,
    heading: "Invest 200 INTD$!",
    text: "Invest 200 INTD$ ByBit or Binance platform and get 1,000 INTD$ till 27th jan 2025",
  },
  {
    image: cardImg2,
    tag: "Promotion",
    tagIcon: promotionIcon,
    heading: "Sell 100 INTD$!",
    text: "Sell 100 IDT$ on the Coinbase platform by January 15, 2025, and earn 500 INTD$ as a reward!",
    imgRight: "0",
  },
  {
    image: cardImg3,
    tag: "Investment",
    tagIcon: dollarIcon,
    heading: "Invest in Stocks!",
    text: "Invest 100 INTD$ on the Coinbase stocks by January 15, 2025, and earn 500 INTD$ as a reward!",
    imgRight: "0",
    imgBottom: "-100px",
  },
  {
    image: cardImg1,
    tag: "Promotion",
    tagIcon: promotionIcon,
    heading: "Buy 20 bitcoins!",
    text: "Purchase 20 bitcoins from ByBit or Binance platform and get 1,000 INTD$ till 27th jan 2025",
  },
];

const PromotionalRewards = () => {
  const router = useRouter();
  return (
    <StyledPromotionalRewards>
      <div className="heading-holder">
        <Image src={gif} alt="gif" />
        <span className="heading">Investment & Promotional Rewards</span>
      </div>
      <div className="card-holder">
        {cardsData?.map((item, index) => (
          <CardStyled
            key={index}
            imgBottom={item?.imgBottom}
            imgRight={item?.imgRight}>
            <Image src={item.image} alt="cardImg" className="card-img" />
            <div className="tag">
              <Image src={item.tagIcon} alt="tagIcon" width={15} height={15} />
              <span>{item.tag}</span>
            </div>
            <span className="heading">{item.heading}</span>
            <p>{item.text}</p>
            {item?.tag == "Investment" ? (
              <Button
                width="200px"
                onClick={() => router.push("/initiate-investment")}>
                Initiate Investment!
              </Button>
            ) : (
              <Button width="150px">Avail Now!</Button>
            )}
          </CardStyled>
        ))}
      </div>
    </StyledPromotionalRewards>
  );
};

export default PromotionalRewards;
