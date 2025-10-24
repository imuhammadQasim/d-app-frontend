import React, { useCallback, useState } from "react";
import TableHeader from "../TableHeader";
import { StyledTableLayout } from "./TableLayout.styles";
import { debounce } from "../../../helpers/common";
import SearchIcon from "@/assets/images/search-icon.svg";
import filterIcon from "@/assets/images/filter-icon.svg";
import walletIcon from "@/assets/images/wallet-icon.svg";
import Field from "../Field";
import Pagination from "../Pagination";
import Button from "@/components/Button";
import CheckingDropdown from "@/components/CheckingDropdown";
import Image from "next/image";

function TableLayout({
  children,
  currentPage = 1,
  pageSize = 10,
  totalCount = 0,
  onChangeFilters,
  exportBtn,
  createBtn,
  noNegativeMargin,
  tableHeading,
  noPagination,
  placeholder,
  btnText,
  filterBlock,
  iconImg,
  openModal,
  content,
  setSearchText,
  innerBorder,
  walletFilter,
}) {
  const [filterState, setFilterState] = useState("");
  // function fetchResults(e) {
  //     onChangeFilters(e);
  // }

  // const debouncedFetchResults = useCallback(debounce(fetchResults, 300), []);
  const debouncedSetSearchQuery = useCallback(
    debounce((query) => {
      setSearchText((_) => ({ ..._, searchText: query }));
    }, 300),
    []
  );

  const filters = [
    {
      label: "All",
    },
    {
      label: "Purchased",
    },
    {
      label: "Invested",
    },
  ];

  return (
    <>
      <StyledTableLayout
        innerBorder={innerBorder}
        noNegativeMargin={noNegativeMargin}
        noPagination={noPagination}
        filterBlock={filterBlock}>
        {(tableHeading || placeholder || content || btnText) && (
          <div className="head">
            {tableHeading && (
              <strong className="table-heading"> {tableHeading}</strong>
            )}
            {walletFilter && (
              <div className="wallet-filters">
                <CheckingDropdown
                  arr={filters}
                  image={filterIcon}
                  radius="10px"
                />
                <div className="filter-btn">
                  <Image src={walletIcon} alt="walletIcon" />
                  <span>Filter by Date</span>
                </div>
              </div>
            )}
            {/* <div className="actions">
              {placeholder && (
                <div className="item">
                  <div className="Search">
                    <Field
                      inputSm
                      type="search"
                      rounded
                      sm
                      name="search"
                      placeholder={placeholder}
                      prefix={<img src={SearchIcon} alt="SearchIcon" />}
                      onChange={({ target: { value } }) => {
                        debouncedSetSearchQuery(value);
                      }}
                    />
                  </div>
                </div>
              )}
              {iconImg && (
                <div className="icon-div" onClick={openModal}>
                  <img src={iconImg} alt="iconImg" />
                </div>
              )}
            </div> */}
          </div>
        )}

        <TableHeader
          total={totalCount}
          page={currentPage}
          resultPerPage={pageSize}
          setPageSize={(_) => onChangeFilters({ pageSize: _, page: 1 })}
          exportBtn={exportBtn}
          createBtn={createBtn}
        />
        {children}
        <div className="pagination">
          {totalCount > 1 ? (
            <Pagination
              currentPage={currentPage}
              totalCount={totalCount}
              pageSize={pageSize}
              // onPageChange={_ => onChangeFilters({ page: _ })}
              onPageChange={(_) =>
                onChangeFilters({ filter: filterState.filter, page: _ })
              }
            />
          ) : (
            ""
          )}
        </div>
      </StyledTableLayout>
    </>
  );
}

export default TableLayout;
