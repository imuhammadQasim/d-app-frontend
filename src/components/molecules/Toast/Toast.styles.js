import styled, {css} from "styled-components";

export const StyledAlert = styled.div`
    width: 100%;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    align-items: center;
    font-size: var(--font-size-sm);
    line-height: calc(var(--font-size-sm) + 0.3125rem);
    @media (min-width: 768px) {
        padding: 1rem 3.9375rem 1rem 1rem;
    }

    ${({$type}) =>
        $type === "success" &&
        css`
            color: var(--secondary);
            background: #97fa93;
        `}

    ${({$type}) =>
        $type === "info" &&
        css`
            color: var(--info-text);
            background: var(--info);
        `}

    ${({$type}) =>
        $type === "error" &&
        css`
            color: var(--danger-100);
            background: #fef0f4;
        `}

    ${({$type}) =>
        $type === "warning" &&
        css`
            color: var(--warning);
            background: #fffaf2;
        `}
`;

export const Message = styled.p`
    color: inherit;
    margin: 0;
`;
