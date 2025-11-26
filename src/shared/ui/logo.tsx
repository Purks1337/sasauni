import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  href?: string;
  className?: string;
}

export function Logo({ href = '/', className }: LogoProps) {
  const logoImage = (
    <Image
      src="/images/1001logo.svg"
      alt="Логотип 1001 ночь"
      height={44}
      width={75}
      className={className}
      priority
    />
  );

  return href ? <Link href={href}>{logoImage}</Link> : logoImage;
}
