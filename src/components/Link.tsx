import NextLink from 'next/link';
import React from 'react';

export interface LinkProps {
    href: string;
    className?: string;
    target?: string;
    rel?: string;
}

const Link = ({ className, ...props }: LinkProps) => (
    <NextLink {...props} className={className} />
);

Link.displayName = 'Link';

export default Link;