import { Button } from "./button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => <Button onClick={() => alert("Primary Button Clicked")}>Primary Button</Button>;
