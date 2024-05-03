import { CSSProperties, ReactEventHandler } from "react";

export type ImageType = {
  webp1: string;
  webp2: string;
  x1: string;
  x2: string;
  alt?: string;
} | null;

export interface PictureProps {
  /* Текстовое описание изображения */
  alt?: string;
  className?: string;
  /* Объект с ссылками изображений (x1, x2 - ретина)  */
  image?: ImageType;
  /* Объект с inline стилями */
  style?: CSSProperties;
  /* Коллбек срабатывающий после загрузки изображения */
  onLoad?: ReactEventHandler<HTMLImageElement>;
  /* Коллбек срабатывающий при ошибке */
  onError?: ReactEventHandler<HTMLImageElement>;
}
