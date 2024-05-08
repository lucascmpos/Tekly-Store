import Image, { ImageProps } from "next/image";
import React from "react";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className="h-auto w-full object-contain lg:h-72"
      sizes="100vw"
      alt={alt}
      {...props}
    />
  );
};

export default PromoBanner;
