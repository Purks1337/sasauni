import type { FC, SVGProps } from 'react';

interface FeaturePillProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
  className?: string;
}

export function FeaturePill({ icon: IconComponent, label, className }: FeaturePillProps) {
  return (
    <div className={`flex items-center gap-1.5 sm:gap-2 border rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 bg-[#F8F3D7] border-[#E2D2A9] ${className ?? ''}`}>
      <IconComponent width={20} height={20} className="sm:w-6 sm:h-6 text-[#1A1E08] flex-shrink-0" />
      <span className="text-[#1A1E08] text-sm sm:text-base leading-[1.2]">{label}</span>
    </div>
  );
}