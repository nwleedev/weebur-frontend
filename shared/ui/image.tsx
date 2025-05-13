import { useIntersectionObserver } from "@uidotdev/usehooks";
import { HTMLProps, useEffect } from "react";

export type ImageProps = HTMLProps<HTMLImageElement>;

const LAZY_IMAGE_THRESHOLD = 0.5;

/**
 * 이미지를 지연 로드할 수 있는 이미지 컴포넌트입니다.
 */
export const LazyImage = (props: ImageProps) => {
  const { src, alt, ...others } = props;
  const [ref, entry] = useIntersectionObserver({
    threshold: LAZY_IMAGE_THRESHOLD,
  });
  useEffect(() => {
    if (
      entry &&
      entry.isIntersecting &&
      entry.target instanceof HTMLImageElement &&
      !entry.target.src
    ) {
      if (src) {
        entry.target.src = src;
      }
    }
  }, [entry, src]);
  return <img ref={ref} alt={alt} {...others} />;
};
