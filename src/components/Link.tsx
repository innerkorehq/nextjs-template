import NextLink from 'next/link';
import React from 'react';

export interface LinkProps {
    href: string;
    className?: string;
    target?: string;
    rel?: string;
}

const Link = ({ className, children, ...props }: React.PropsWithChildren<LinkProps>) => (
    <NextLink {...props} className={className}>
        {children}
    </NextLink>
);

Link.displayName = 'Link';

export default Link;