import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

const PromoBanner = ({ alt, className, ...props }: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className={cn("h-auto w-full object-contain", className)}
      sizes="100vw"
      alt={alt}
      {...props}
    />
  );
};

export default PromoBanner;
