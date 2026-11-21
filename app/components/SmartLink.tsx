type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Renders nothing while a link is still a "#" placeholder, so the live site
 * never shows dead links. External links open in a new tab.
 */
export default function SmartLink({ href, className, children }: Props) {
  if (!href || href === "#") return null;
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
