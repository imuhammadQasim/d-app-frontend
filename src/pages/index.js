import WalletChart from "@/components/Dashboard/WalletChart";
import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import LiveGraph from "@/components/Dashboard/LiveGraph";
import PromotionalRewards from "@/components/Dashboard/PromotionalRewards";
import { StyledDashboard } from "@/components/Dashboard/Dashboard.styles";
import Loader from "@/components/Loader";
import { getCookie } from "@/helpers/common";
import authService from "@/services/authService";
import { useRouter } from "next/router";
import Toast from "@/components/molecules/Toast";
import { AuthContext } from "@/context/AuthContext";

const PromotionsMap = dynamic(
  () => import("@/components/Dashboard/PromotionMap"),
  {
    ssr: false,
  }
);

const Index = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { user, initializing } = useContext(AuthContext);
  useEffect(() => {
    const handleUserStatus = async () => {
      if (initializing) return;
      const userStatus = user?.status;
      if (!user) {
        router.push("/login");
        return;
      }

      if (userStatus === "VERIFY_EMAIL") {
        Toast({
          type: "info",
          message: "Please verify your email.",
        });
        router.push("/login");
      } else if (userStatus === "KYC_VERIFICATION_INITIATED") {
        router.push("/kyc-verification");
      } else if (userStatus === "KYC_VERIFIED") {
        router.push("payment-method");
      } else if (userStatus === "SUSPENDED" || userStatus === "BLOCKED") {
        Toast({
          type: "info",
          message: `Your account is ${userStatus}.`,
        });

        router.push("/login");
      } else {
        setLoading(false);
      }
    };

    handleUserStatus();
  }, [user, initializing]);

  if (loading) {
    return <Loader />;
  }

  return (
    <StyledDashboard>
      <div className="graph-holder">
        <div className="head">
          <WalletChart />
          <PromotionsMap />
        </div>
        <LiveGraph />
      </div>
      <div className="promotions">
        <PromotionalRewards />
      </div>
    </StyledDashboard>
  );
};

export default Index;
