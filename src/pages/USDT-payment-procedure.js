import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoginTemplate from "@/components/LoginTemplate";
import Image from "next/image";
import USDT from "@/assets/images/paymentUSDT.png";
import Link from "@/assets/images/USDTlink.png";
import Button from "@/components/Button";
import { useActiveAccount, useAutoConnect } from "thirdweb/react";
import { SubmitContext } from "@/context/SubmitContext";
import { getContract, prepareContractCall, sendTransaction } from "thirdweb";
import { client } from "@/utils/clientThirdWeb.js";
import { ethereum } from "thirdweb/chains";
import Toast from "@/components/molecules/Toast";
import authService from "@/services/authService";
import { waitForReceipt } from "thirdweb";
import { getBalance } from "thirdweb/extensions/erc20";

export default function USDTPaymentProcedure() {
  const router = useRouter();
  const account = useActiveAccount();
  const { handleData } = useContext(SubmitContext);
  const [usdtBalance, setUsdtBalance] = useState(null);

  const { data: autoConnected } = useAutoConnect({
    client,
    wallets: [],
    onConnect: (wallet) => {},
    timeout: 15000,
  });

  useEffect(() => {
    const fetchUSDTBalance = async () => {
      if (!account?.address) return;

      try {
        const contract = getContract({
          address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          client,
          chain: ethereum,
        });

        const result = await getBalance({
          contract,
          address: account.address,
        });

        setUsdtBalance(result);
        console.log("USDT Balance:", result.displayValue, result.symbol);
      } catch (err) {
        console.error(" Error fetching USDT balance:", err);
      }
    };

    fetchUSDTBalance();
  }, [account]);

  useEffect(() => {}, [autoConnected]);

  useEffect(() => {
    if (!account) {
      router.push("/payment-USDT");
    }
  }, [account]);

  const success = {
    heading: "Payment Successful!",
    text: "Congratulations! Your purchase of 4.99 USDT was successful",
    btnText: "Go to Dashboard!",
    onClick: () => router.push("/"),
  };

  const handleSubmit = async () => {
    if (!account) {
      Toast({
        type: "info",
        message: "Please connect you wallet to proceed the further process.",
      });
      return;
    }

    if (!usdtBalance || parseFloat(usdtBalance.displayValue) <= 4.99) {
      Toast({
        type: "error",
        message: "Insufficient USDT balance in your account.",
      });
      return;
    }

    const amount = 4990000n;
    const receiver = "0xEc7C2a9B63fF270782b994FE4fe44b160e933567";

    try {
      const contract = getContract({
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        client,
        chain: ethereum,
      });

      const transaction = prepareContractCall({
        contract,
        method: "function transfer(address to, uint256 value)",
        params: [receiver, amount],
      });

      // checking the gas cost fee for the transaction
      // const gasCost = await estimateGasCost({
      //   client,
      //   chain: ethereum,
      //   transaction,
      // });

      // console.log(" Estimated Gas Cost (in ETH):", gasCost.value);
      // Toast({
      //   type: "info",
      //   message: `Gas fee required in ETH: ${gasCost.displayValue}`,
      // });

      const { tx } = await sendTransaction({ account, transaction });

      const receipt = await waitForReceipt({
        client,
        chain: ethereum,
        transactionHash: tx.transactionHash,
      });

      console.log("✅ Receipt:", receipt);
      console.log("📌 Status:", receipt.status);

      if (receipt.status === "success") {
        const payload = {
          hash: tx.transactionHash,
          from: account.address,
          to: receiver,
          amount: 4.99,
          status: "success",
          timestamp: new Date(),
        };
        const res = await authService.walletPaymentVerify(payload);
        Toast({
          type: "success",
          message: `Transaction sent! Hash: ${res.message}`,
        });
        handleData(success);
      }
    } catch (err) {
      Toast({ type: "error", message: `Transaction failed: ${err.message}` });
      console.log(`Transaction failed: ${err.message}`);
    }
  };

  return (
    <LoginTemplate hideLogo>
      <div className="procedureUSDT">
        <div className="procedureUSDTContent">
          <Image src={USDT} alt="" />
          <h5>USDT Payment</h5>
        </div>

        <p className="connectedWallet">Connected Wallet:</p>
        <div className="link">
          <p>{account ? account?.address : "Account Not Connected"}</p>
          <Image src={Link} alt="copy link" />
        </div>

        <div className="paymentAmount">
          <p>Payment Amount</p>
          <h6>4.99 USDT</h6>
        </div>

        <Button onClick={handleSubmit}>Initiate USDT Payment</Button>

        <p className="secureBlockchain">
          Secure blockchain payment via selected network
        </p>
      </div>
    </LoginTemplate>
  );
}
