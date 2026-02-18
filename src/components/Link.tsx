import NextLink from 'next/link';
import React from 'react';

export interface LinkProps {
    href: string;
    className?: string;
    target?: string;
    rel?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const Link = ({ className, children, onClick, ...props }: React.PropsWithChildren<LinkProps>) => (
    <NextLink {...props} className={className} onClick={onClick}>
        {children}
    </NextLink>
);

Link.displayName = 'Link';

export default Link;