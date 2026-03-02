import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

export interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    quality?: number;
    sizes?: string;
    className?: string;
    type?: "profile" | "logo" | "banner" | "gallery" | "thumbnail" | "icon" | "other" | "background";
}

type Props = ImageProps & NextImageProps & { placeholder?: never };

type ImageType = ImageProps['type'];

const TYPE_SIZES: Record<NonNullable<ImageType>, { width: number; height: number }> = {
    profile:    { width: 200,  height: 200  },
    logo:       { width: 300,  height: 100  },
    banner:     { width: 1920, height: 480  },
    gallery:    { width: 800,  height: 600  },
    thumbnail:  { width: 400,  height: 300  },
    icon:       { width: 64,   height: 64   },
    background: { width: 1920, height: 1080 },
    other:      { width: 1280, height: 720  },
};

const DEFAULT_SIZE = { width: 1280, height: 720 };

const isExternalSrc = (src: string) =>/^https?:\/\//i.test(src) || src.startsWith('//') || src.startsWith('data:');

const Image: React.FC<Props> = ({ type, width, height, quality, sizes, ...props }: Props) => {
    if (!props.src) return null;

    if (isExternalSrc(props.src)) {
        return (
            <img
                width={width}
                height={height}
                {...props}
            />
        );
    }

    const defaults = type ? TYPE_SIZES[type] : DEFAULT_SIZE;
    const resolvedWidth  = width  ?? defaults.width;
    const resolvedHeight = height ?? defaults.height;

    return <NextImage width={resolvedWidth} height={resolvedHeight} quality={quality} sizes={sizes} {...props} />;
};

export default Image;