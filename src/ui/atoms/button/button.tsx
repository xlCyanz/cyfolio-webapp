import { Button, ButtonProps } from "theme-ui";

export type IButtonProps = ButtonProps;

const ButtonWrapper = (props: IButtonProps) => {
  return <Button {...props} />;
};

export default ButtonWrapper;
