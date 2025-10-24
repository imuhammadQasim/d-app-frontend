import Table from "@/components/molecules/Table";
import TableLayout from "@/components/molecules/TableLayout";
import arrow from "@/assets/images/rounded-arrow.svg";
import arrowUp from "@/assets/images/rounded-arrow-up.svg";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { StyledStatus, StyledWalletTable } from "./Wallet.styles";
import userService from "@/services/user.service";
const MyWalletTable = () => {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    itemsPerPage: 8,
  });
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      await userService
        .getTransactions()
        .then((res) => {
          // console.log("All transactions are >> ", res);
          setTransactions(res?.transactions);
          // console.log("TXNS state >> ", transactions);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchTransactions();
  }, []);
  const columnNames = ["Amount", "Type", "Status", "Date & Time"];

  const amount = (amount, type) => (
    <div className="textWrap">
      <div className="image-wrapper">
        {type === "Invest" ? (
          <Image src={arrowUp} alt="Branch" />
        ) : (
          <Image src={arrow} alt="Branch" />
        )}
      </div>
      <span className="amount">
        {amount}&nbsp;<span className="intd">INTD$</span>
      </span>
    </div>
  );
  const handleStatus = (statusText) => {
    return (
      <StyledStatus $status={statusText}>
        <span className="text">{statusText?.toUpperCase()}</span>
      </StyledStatus>
    );
  };
 const formatDate = (isoDate) => {
    if (!isoDate) return "-";
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };
  const walletData = [
    {
      amount: "00.00",
      type: "Purchase",
      status: "Completed",
      date: "Thursday 09/01/2025",
    },
    {
      amount: "00.00",
      type: "Invest",
      status: "Completed",
      date: "Thursday 09/01/2025",
    },
    {
      amount: "00.00",
      type: "Purchase",
      status: "Cancelled",
      date: "Thursday 09/01/2025",
    },
    {
      amount: "00.00",
      type: "Invest",
      status: "Completed",
      date: "Thursday 09/01/2025",
    },
    {
      amount: "00.00",
      type: "Invest",
      status: "Cancelled",
      date: "Thursday 09/01/2025",
    },
    {
      amount: "00.00",
      type: "Purchase",
      status: "Completed",
      date: "Thursday 09/01/2025",
    },
    {
      amount: "00.00",
      type: "Purchase",
      status: "Cancelled",
      date: "Thursday 09/01/2025",
    },
    {
      amount: "00.00",
      type: "Invest",
      status: "Completed",
      date: "Thursday 09/01/2025",
    },
    {
      amount: "00.00",
      type: "Purchase",
      status: "Completed",
      date: "Thursday 09/01/2025",
    },
    {
      amount: "00.00",
      type: "Purchase",
      status: "Completed",
      date: "Thursday 09/01/2025",
    },
    {
      amount: "00.00",
      type: "Invest",
      status: "Completed",
      date: "Thursday 09/01/2025",
    },
    {
      amount: "00.00",
      type: "Purchase",
      status: "Cancelled",
      date: "Thursday 09/01/2025",
    },
    {
      amount: "00.00",
      type: "Invest",
      status: "Completed",
      date: "Thursday 09/01/2025",
    },
    {
      amount: "00.00",
      type: "Purchase",
      status: "Cancelled",
      date: "Thursday 09/01/2025",
    },
    {
      amount: "00.00",
      type: "Invest",
      status: "Completed",
      date: "Thursday 09/01/2025",
    },
  ];

  const { rowsData, totalCount } = useMemo(() => {
    const startIdx = (searchQuery.page - 1) * searchQuery.itemsPerPage;
    const endIdx = startIdx + searchQuery.itemsPerPage;
    return {
      rowsData: transactions
        ?.slice(startIdx, endIdx)
        ?.map((item) => [
          amount(item?.amountIntd, item?.type),
          item?.type,
          handleStatus(item?.status),
          formatDate(item?.updated_at),
        ]),
      totalCount: transactions?.length,
    };
  }, [transactions]);
  return (
    <StyledWalletTable>
      <TableLayout
        tableHeading="Transaction History"
        walletFilter
        onChangeFilters={(filters) => {
          setSearchQuery((_) => ({
            ..._,
            ...filters,
          }));
        }}
        currentPage={searchQuery?.page}
        pageSize={searchQuery?.itemsPerPage}
        totalCount={totalCount}
      >
        <Table rowsData={rowsData} columnNames={columnNames} noPadding />
      </TableLayout>
    </StyledWalletTable>
  );
};

export default MyWalletTable;
