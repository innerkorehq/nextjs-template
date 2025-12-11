import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

export interface ImageProps extends Omit<NextImageProps, 'placeholder' | 'blurDataURL'> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
    quality?: number;
    sizes?: string;
    blurDataURL?: string;
    style?: React.CSSProperties;
    className?: string;
    type?: 'profile' | 'logo' | 'banner' | 'gallery' | 'thumbnail' | 'icon' | 'other';
}

const isExternalSrc = (src: string) =>
    /^https?:\/\//i.test(src) || src.startsWith('//') || src.startsWith('data:');

const Image: React.FC<ImageProps> = (props) => {
    const {
        src,
        alt,
        width = 1280,
        height = 720,
        priority = false,
        quality,
        sizes,
        className,
        style,
        loading,
        onLoadingComplete,
        unoptimized,
        loader,
        type,
        ...rest
    } = props;

    if (!src) {
        return null;
    }

    const dimensionProps = { width, height };

    if (isExternalSrc(src)) {
        return (
            <img
                src={src}
                alt={alt}
                className={className}
                style={style}
                loading={priority ? 'eager' : loading ?? 'lazy'}
                sizes={sizes}
                decoding="async"
                referrerPolicy="no-referrer"
                {...dimensionProps}
                {...rest}
            />
        );
    }

    return (
        <NextImage
            src={src}
            alt={alt}
            {...dimensionProps}
            priority={priority}
            quality={quality}
            sizes={sizes}
            className={className}
            style={style}
            loading={loading}
            onLoadingComplete={onLoadingComplete}
            unoptimized={unoptimized}
            loader={loader}
            {...rest}
        />
    );
};

export default Image;