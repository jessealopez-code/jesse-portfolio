import dims from "./image-dims.json";

/** width/height attributes for an image in /public, so it reserves its space before loading. */
export function imgDims(src: string): { width?: number; height?: number } {
  const d = (dims as Record<string, number[]>)[src];
  return d ? { width: d[0], height: d[1] } : {};
}
