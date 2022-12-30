import { Button, ButtonProps, Link, LinkProps } from "@atoms";

export type ButtonLinkProps = {
  href: string;
  text: string;
  buttonProps?: ButtonProps;
  linkProps?: Omit<LinkProps, "href" | "children">;
};

const ButtonLink = ({
  href,
  text,
  buttonProps = {},
  linkProps = {},
}: ButtonLinkProps) => (
  <Link href={href} {...linkProps}>
    <Button {...buttonProps}>{text}</Button>
  </Link>
);

export default ButtonLink;
