import Link from "next/link";
import { FC } from "react";
import { Button, Link as LinkA } from "theme-ui";

interface IButtonLinkProps {
  href: string;
  text: string;
  buttonProps?: any;
  linkProps?: any;
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
