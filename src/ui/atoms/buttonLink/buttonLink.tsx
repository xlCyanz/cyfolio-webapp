import { Button, ButtonProps, LinkProps } from "theme-ui";
import Link from "../link";

export type ButtonLinkProps = {
  href: string;
  text: string;
  buttonProps?: ButtonProps;
  linkProps?: LinkProps;
};

const ButtonLink = ({
  href,
  text,
  buttonProps = {},
  linkProps = {},
}: ButtonLinkProps) => {
  return (
    <Link href={href} {...linkProps}>
      <Button {...buttonProps}>{text}</Button>
    </Link>
  );
};

export default ButtonLink;
