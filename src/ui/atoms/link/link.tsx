import React from "react";
import NextLink from "next/link";
import { Link as LinkUI, LinkProps as LinkPropsUI } from "theme-ui";

export type LinkProps = {
  href: string;
  children: React.ReactElement;
} & LinkPropsUI;

const LinkWrapper = ({ href, children, ...props }: LinkProps) => {
  return (
    <NextLink href={href} passHref scroll={false}>
      <LinkUI {...props}>{children}</LinkUI>
    </NextLink>
  );
};

export default LinkWrapper;
