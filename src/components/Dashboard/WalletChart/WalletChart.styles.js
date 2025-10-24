import styled from "styled-components";

export const StyledWalletChart = styled.div`
    padding: 15px;
    border: 1px solid var(--dark-100);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    margin: 0 0 10px;

    @media (min-width: 992px) {
        width: 50%;
        margin: 0;
    }

    @media (min-width: 576px) {
        padding: 20px;
    }

    .head,
    .heading-holder,
    .intd,
    .price-holder,
    .currency-tag {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .highcharts-container {
        height: 280px !important;
        @media (min-width: 1400px) {
            height: 320px !important;
        }
    }

    .head {
        justify-content: space-between;
        margin: 0 0 16px;

        .heading {
            display: block;
            font-size: 20px;
            line-height: 24px;
            font-weight: 500;
        }

        .wallet-gif {
            width: 25px;
            height: 25px;
        }
    }

    .intd {
        justify-content: space-between;
        margin: 0 0 16px;

        .checking {
            display: flex;
            gap: 6px;
            padding: 8px 15px;
            background: var(--dark-100);
            border-radius: 5px;
        }

        button {
            width: auto;
            min-width: 120px;
            padding: 8px;
        }
    }

    .price-holder {
        margin: 0 0 20px;

        h3 {
            margin: 0;
        }

        button {
            width: auto;
            min-width: max-content;
            padding: 6px;
        }

        .currency-tag {
            background: var(--off-white);
            color: var(--secondary);
            padding: 6px;
            border-radius: 6px;
            gap: 5px;
        }
    }
`;
