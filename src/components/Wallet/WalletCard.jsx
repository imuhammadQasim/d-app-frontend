import React from "react";
import {StyledWalletCard} from "./Wallet.styles";
import upIcon from "@/assets/images/up-icon.svg";
import Image from "next/image";

const WalletCard = ({arr}) => {
    return (
        <>
            {arr?.map((item, index) => (
                <StyledWalletCard key={index}>
                    <span className="top-text">{item?.topText}</span>
                    <span className="total-price">
                        ${item?.totalPrice} <span>INTD$</span>
                    </span>
                    <div className="purchase-section">
                        <div>
                            <span className="heading">{item?.purchase ? "Purchased" : "Invest"}&nbsp;This Week.</span>
                            <div className="price-holder">
                                <span className="price">${item?.weekPrice}</span>
                                <Image src={upIcon} alt="upIcon1" />
                                <span className="percent">{item?.weekPercent}%</span>
                            </div>
                        </div>
                        <div>
                            <span className="heading">{item?.purchase ? "Purchased" : "Invest"}&nbsp;This Month.</span>
                            <div className="price-holder">
                                <span className="price">${item?.monthPrice}</span>
                                <Image src={upIcon} alt="upIcon1" />
                                <span className="percent">{item?.monthPercent}%</span>
                            </div>
                        </div>
                    </div>
                </StyledWalletCard>
            ))}
        </>
    );
};

export default WalletCard;
