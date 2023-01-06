import React from "react";
import NextLink from "next/link";
import { Link as LinkUI, LinkProps } from "theme-ui";

export interface ILinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
}

const LinkWrapper = ({ href, children, ...props }: ILinkProps) => (
  <NextLink href={href} passHref scroll={false}>
    <LinkUI {...props}>{children}</LinkUI>
  </NextLink>
);

export default LinkWrapper;
