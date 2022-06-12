import Link from "next/link";
import { FC } from "react";
import { Button, ButtonProps, Link as LinkA, LinkProps } from "theme-ui";

interface IButtonLinkProps {
  href: string;
  text: string;
  buttonProps?: ButtonProps;
  linkProps?: LinkProps;
}

const ButtonLink: FC<IButtonLinkProps> = ({
  href,
  text,
  buttonProps,
  linkProps,
}) => {
  return (
    <Link href={href} passHref scroll={false}>
      <LinkA {...linkProps}>
        <Button {...buttonProps}>{text}</Button>
      </LinkA>
    </Link>
  );
};

ButtonLink.defaultProps = {
  buttonProps: {},
  linkProps: {},
};

export default ButtonLink;
