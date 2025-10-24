import React, { useContext } from "react";
import { StyledLiveGraph } from "./LiveGraph.styles";
import gif from "@/assets/images/live-graph-gif.gif";
import upIcon from "@/assets/images/up-icon.svg";
import MiningGraph from "./MiningGraph";
import Image from "next/image";
import { useState } from "react";
import InvestGraph from "./InvestGraph";
import { AuthContext } from "@/context/AuthContext";
const LiveGraph = () => {
  const [tab, setTab] = useState(1);
  const [activeDuration, setActiveDuration] = useState(7);
  const { user } = useContext(AuthContext);
  return (
    <StyledLiveGraph>
      <div className="head-wrapper">
        <div className="graph-head">
          <div className="heading-holder ">
            <Image src={gif} alt="gif" />
            <span className="heading">Live Graph</span>
          </div>

          <div className="tabs-holder">
            <button
              className={tab === 1 ? "active" : ""}
              onClick={() => setTab(1)}
            >
              Mining
            </button>
            <button
              className={tab === 2 ? "active" : ""}
              onClick={() => setTab(2)}
            >
              Investing
            </button>
          </div>
        </div>
        <div className="price-section">
          <div className="price-holder">
            <h3>
              ${`${user?.ipo_reward_amount} ${" "}`}
              <span className="text">
                INTD${tab === 2 ? "Total Investments" : ""}
              </span>
            </h3>

            <div className="currency-tag">
              <Image src={upIcon} alt="upIcon" width={15} height={15} />
              0%
            </div>
          </div>
          <ul className="time-duration">
            <li
              className={activeDuration === 1 ? "active" : ""}
              onClick={() => setActiveDuration(1)}
            >
              1H
            </li>
            <li
              className={activeDuration === 2 ? "active" : ""}
              onClick={() => setActiveDuration(2)}
            >
              4H
            </li>
            <li
              className={activeDuration === 3 ? "active" : ""}
              onClick={() => setActiveDuration(3)}
            >
              1D
            </li>
            <li
              className={activeDuration === 4 ? "active" : ""}
              onClick={() => setActiveDuration(4)}
            >
              1W
            </li>
            <li
              className={activeDuration === 5 ? "active" : ""}
              onClick={() => setActiveDuration(5)}
            >
              1M
            </li>
            <li
              className={activeDuration === 6 ? "active" : ""}
              onClick={() => setActiveDuration(6)}
            >
              6M
            </li>
            <li
              className={activeDuration === 7 ? "active" : ""}
              onClick={() => setActiveDuration(7)}
            >
              1Y
            </li>
          </ul>
        </div>
      </div>
      {tab === 1 && <MiningGraph />}
      {tab === 2 && <InvestGraph />}
    </StyledLiveGraph>
  );
};

export default LiveGraph;
