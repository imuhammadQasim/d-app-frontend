import { useMemo } from "react";

export const useStripeOptions = () => {
  return useMemo(
    () => ({
      showIcon: true,
      style: {
        base: {
          color: "#fff",
          fontSize: "12px",
          "::placeholder": { color: "rgba(247, 247, 247, 0.91)" },
        },
        invalid: { color: "#ffaf9d" },
      },
    }),
    []
  );
};
