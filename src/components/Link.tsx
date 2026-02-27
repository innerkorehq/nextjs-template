import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';

export interface LinkProps {
    href: string;
    className?: string;
    target?: string;
    rel?: string;
}

type Props = LinkProps & NextLinkProps;

const Link = ({ className, children, onClick, ...props }: React.PropsWithChildren<Props>) => (
    <NextLink {...props} className={className} onClick={onClick}>
        {children}
    </NextLink>
);

Link.displayName = 'Link';

export default Link;