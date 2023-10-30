import Image, { ImageProps } from "next/image";
import React from "react";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <div className="lg:mx-auto lg:w-2/6">
      <Image
        height={0}
        width={0}
        className="h-auto w-full px-5 py-4 lg:w-full"
        sizes="100vw"
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default PromoBanner;
