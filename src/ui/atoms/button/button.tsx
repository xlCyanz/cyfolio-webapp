import { Button, ButtonProps as ButtonPropsUI } from "theme-ui";

export type ButtonProps = ButtonPropsUI;

const ButtonWrapper = (props: ButtonProps) => {
  return <Button {...props} />;
};

export default ButtonWrapper;
