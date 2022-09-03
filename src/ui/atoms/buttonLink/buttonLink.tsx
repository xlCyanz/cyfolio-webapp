import Link from "next/link";
import { Button, ButtonProps, Link as LinkA, LinkProps } from "theme-ui";

interface IButtonLinkProps {
  href: string;
  text: string;
  buttonProps?: ButtonProps;
  linkProps?: LinkProps;
}

const ButtonLink = ({
  href,
  text,
  buttonProps,
  linkProps,
}: IButtonLinkProps) => {
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
