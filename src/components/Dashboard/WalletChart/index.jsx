import React, { useContext } from "react";
import Highcharts from "highcharts";
import { StyledWalletChart } from "./WalletChart.styles";
import walletGif from "@/assets/images/wallet-gif.gif";
import logoSm from "@/assets/images/logo-sm.svg";
import cartIcon from "@/assets/images/cart-icon.svg";
import upIcon from "@/assets/images/up-icon.svg";
import Image from "next/image";
import Button from "@/components/Button";
import HighchartsReact from "highcharts-react-official";
import { useRouter } from "next/router";
import CheckingDropdown from "@/components/CheckingDropdown";
import walletIcon from "@/assets/images/wallet-icon.svg";
import savingIcon from "@/assets/images/saving-icon.svg";
import rothIcon from "@/assets/images/roth-icon.svg";
import { AuthContext } from "@/context/AuthContext";

const filters = [
  {
    icon: walletIcon,
    label: "Checking",
    price: "6,5210.00",
  },
  {
    icon: savingIcon,
    label: "Savings",
    price: "6,5210.00",
  },
  {
    icon: rothIcon,
    label: "Roth",
    price: "6,5210.00",
  },
];

const WalletChart = () => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  const options = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [-45, -90],
        style: {
          fontSize: "13px",
          color: "#FFFFFF",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
      gridLineDashStyle: "Dash",
      gridLineColor: "rgba(255, 255, 255, 0.4)",
      labels: {
        enabled: false,
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Population in 2021: <b>{point.y:.1f} millions</b>",
    },
    plotOptions: {
      column: {
        borderRadius: 5,
        pointPadding: 0.2,
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Population",
        colors: [
          "#5BC55B",
          "#7AE27A",
          "#98FF98",
          "#ADFFAD",
          "#C1FFC1",
          "#D6FFD6",
          "#E0FFE0",
        ],

        colorByPoint: true,
        groupPadding: 0,
        borderWidth: 0,
        data: [
          ["Bitcoin", 50.36],
          ["Ethereum", 40.58],
          ["Tether", 30.64],
          ["Solana", 20.65],
          ["Binance Coin", 15.78],
          ["USD Coin", 20.72],
          ["XRP", 20.72],
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "var(--text-color)",
          inside: true,
          verticalAlign: "top",
          format: "{point.y:.1f}%",
          y: 10,
          style: {
            fontSize: "16px",
            fontFamily: "urbanist, sans-serif",
            fontWeight: "300",
            textOutline: "0",
          },
        },
      },
    ],
  };

  return (
    <StyledWalletChart>
      <div className="head">
        <div className="heading-holder">
          <Image src={walletGif} alt="wallet-gif" className="wallet-gif" />
          <span className="heading">My Wallet</span>
        </div>
        <CheckingDropdown arr={filters} />
      </div>
      <div className="intd">
        <div className="checking">
          <Image src={logoSm} alt="logoSm" width={20} height={20} />
          <span>INTD$</span>
        </div>
        <Button onClick={() => router.push("/buy-intd")}>
          <Image src={cartIcon} alt="cartIcon" />
          Buy INTD$
        </Button>
      </div>
      <div className="price-holder">
        <h3>${user?.ipo_reward_amount}</h3>
        <div className="currency-tag">
          <Image src={upIcon} alt="upIcon" width={15} height={15} />
          0%
        </div>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </StyledWalletChart>
  );
};

export default WalletChart;
