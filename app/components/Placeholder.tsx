/* eslint-disable @next/next/no-img-element */
type Props = {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  ratio?: string;
};

/** Shows the image when one is set; otherwise a labelled placeholder tile. */
export default function Placeholder({ src, alt, label, className, ratio = "16 / 10" }: Props) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={className} style={{ aspectRatio: ratio, objectFit: "cover", width: "100%" }} />;
  }
  return (
    <div className={`placeholder ${className ?? ""}`} style={{ aspectRatio: ratio }} aria-hidden="true">
      <span>{label}</span>
    </div>
  );
}
