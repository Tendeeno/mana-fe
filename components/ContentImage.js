import Image from "next/image";
import dimensions from "../data/image-dimensions.json";

// Keep intrinsic space reserved while Next.js defers and resizes the image.
export default function ContentImage({ src, alt, className, sizes, fill = false }) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className={className}
        sizes={sizes}
        quality={80}
        loading="lazy"
      />
    );
  }

  const { width, height } = dimensions[src];
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
        sizes={sizes}
        quality={80}
        loading="lazy"
      />
    </div>
  );
}
