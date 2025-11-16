import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  href?: string;
  className?: string;
}

export function Logo({ href = '/', className }: LogoProps) {
  const logoImage = (
    <Image
      src="/images/1001logo2.png"
      alt="Логотип 1001 ночь"
      height={44}
      width={200}
      style={{ width: 'auto', height: '44px' }}
      className={className}
      priority
      quality={100}
      unoptimized
    />
  );

  return href ? <Link href={href}>{logoImage}</Link> : logoImage;
}
