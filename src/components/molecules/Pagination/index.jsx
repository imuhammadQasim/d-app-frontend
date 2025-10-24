/* eslint-disable radix */
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PaginationList, PaginationButton } from "./Pagination.styles";
import Tooltip from "../Tooltip";
import Input from "../Input";
import UsePagination from "../UsePagination";

function Pagination(props) {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    customCss,
  } = props;

  const [inputCurrentPage, setInputCurrentPage] = useState(1);
  const [error, setError] = useState(false);
  const paginationRange = UsePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  useEffect(() => {
    setInputCurrentPage(currentPage);
  }, [currentPage]);

  const onNext = () => {
    onPageChange(currentPage + 1);
    setInputCurrentPage(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
    setInputCurrentPage(currentPage - 1);
  };

  const onKeyPress = (event) => {
    const { key } = event;
    if (
      key === "Enter" &&
      inputCurrentPage > 0 &&
      inputCurrentPage <= Math.ceil(totalCount / pageSize)
    ) {
      setInputCurrentPage(inputCurrentPage);
      onPageChange(inputCurrentPage);
    }
  };
  const lastPage = paginationRange
    ? paginationRange[paginationRange?.length - 1]
    : 1;

  return (
    <PaginationList css={customCss} dir="ltr">
      <PaginationButton
        type="button"
        onClick={onPrevious}
        disabled={currentPage <= 1}
        size={28}>
        <IoIosArrowBack className="icon" />
      </PaginationButton>
      <Tooltip
        title={error ? "Invalid Page Number" : ""}
        type={error ? "error" : "dark"}
        width={150}>
        <Input
          type="number"
          className="page-input"
          disabled={lastPage === 1}
          value={inputCurrentPage}
          onKeyPress={onKeyPress}
          onChange={(event) => {
            if (
              !(
                +event.target.value > 0 &&
                +event.target.value <= Math.ceil(totalCount / pageSize)
              )
            ) {
              setError(true);
            } else {
              setError(false);
            }
            setInputCurrentPage(parseInt(event.target.value));
          }}
          sm
          css={`
            height: 35px !important;
            width: 35px !important;
            padding: 5px !important;
            text-align: center;
            background: none;
            ${error && "border-color: var(--danger) !important"}
          `}
        />
      </Tooltip>
      <PaginationButton
        type="button"
        onClick={onNext}
        disabled={currentPage >= lastPage}>
        <IoIosArrowForward className="icon" />
      </PaginationButton>
      <span className="flex">
        {/* <span className="text">out of</span> */}
        {paginationRange?.map(
          (pageNumber, index, arr) =>
            arr.length - 1 === index && (
              <span key={index}>( Total pages : {pageNumber})</span>
            )
        )}
      </span>
    </PaginationList>
  );
}

export default Pagination;
