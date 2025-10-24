import React, {useContext} from "react";

import Skeleton from "react-loading-skeleton";

import {Th, Td} from "./TableCell.styles";
import {LoadingContext} from "@/context/loadingContext";

function TableCell({heading, children, align, orderTable, ...rest}) {
    const {loading} = useContext(LoadingContext);
    const CellType = props =>
        heading ? (
            <Th {...props} $align={align} $orderTable={orderTable} />
        ) : (
            <Td {...props} $align={align} $orderTable={orderTable} />
        );

    return <CellType {...rest}>{loading ? <Skeleton width={100} height={15} /> : children}</CellType>;
}

export default TableCell;
