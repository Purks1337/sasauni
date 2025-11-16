import type { FC, SVGProps } from 'react';

interface FeaturePillProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
  className?: string;
}

export function FeaturePill({ icon: IconComponent, label, className }: FeaturePillProps) {
  return (
    <div className={`flex items-center gap-2 border rounded-lg px-3 py-2 bg-[#F8F3D7] border-[#E2D2A9] ${className ?? ''}`}>
      <IconComponent width={24} height={24} className="text-[#1A1E08] flex-shrink-0" />
      <span className="text-[#1A1E08] text-base leading-[1.2]">{label}</span>
    </div>
  );
}