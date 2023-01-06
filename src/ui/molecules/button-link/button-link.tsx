import { Button, IButtonProps, Link, ILinkProps } from "@atoms";

export interface IButtonLinkProps {
  href: string;
  text: string;
  buttonProps?: IButtonProps;
  linkProps?: Omit<ILinkProps, "href" | "children">;
}

const ButtonLink = ({
  href,
  text,
  buttonProps = {},
  linkProps = {},
}: IButtonLinkProps) => (
  <Link href={href} {...linkProps}>
    <Button {...buttonProps}>{text}</Button>
  </Link>
);

export default ButtonLink;
