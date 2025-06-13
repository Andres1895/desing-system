import { ReactNode } from "react";

export const Button = ({
    onClick,
    children,
  }: {
    onClick?: () => void;
    children: ReactNode;
  }) => {
    return (
      <button
        onClick={onClick}
        style={{
          padding: "8px 16px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: 4,
        }}
      >
        {children}
      </button>
    );
  };