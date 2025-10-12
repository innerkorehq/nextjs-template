import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

export interface ImageProps extends Omit<NextImageProps, 'placeholder' | 'blurDataURL'> {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
    quality?: number;
    sizes?: string;
    fill?: boolean;
    placeholder?: string;
    style?: React.CSSProperties;
    className?: string;
}

const Image: React.FC<ImageProps> = (props) => {
    return <NextImage {...props} />;
};

export default Image;