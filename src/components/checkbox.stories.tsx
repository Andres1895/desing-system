import { Checkbox } from "./checkbox";
import { useState } from "react";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};

export const Default = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Checkbox
      checked={checked}
      onChange={() => {
        setChecked(!checked);
      }}
    />
  );
};