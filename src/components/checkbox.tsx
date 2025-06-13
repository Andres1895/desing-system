import React from "react";

export const Checkbox = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return <input type="checkbox" checked={checked} onChange={onChange} />;
};
