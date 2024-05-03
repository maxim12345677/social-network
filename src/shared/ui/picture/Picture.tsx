import { PictureProps } from "./types";

const Picture = ({
  alt,
  className,
  image,
  style,
  onLoad,
  onError,
}: PictureProps) => {
  if (!image) return null;

  const { x1, x2, webp1, webp2 } = image;

  if (!x1 || !x2 || !webp1 || !webp2) return null;

  return (
    <picture>
      <source type="image/webp" srcSet={`${webp2} 2x, ${webp1}`} />
      <source srcSet={`${x2} 2x, ${x1}`} />
      <img
        className={className}
        src={x1}
        alt={alt}
        style={style}
        onLoad={onLoad}
        onError={onError}
      />
    </picture>
  );
};

export default Picture;
