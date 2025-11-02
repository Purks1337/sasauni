import type { FC, SVGProps } from 'react';

interface FeaturePillProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
  className?: string;
}

export function FeaturePill({ icon: IconComponent, label, className }: FeaturePillProps) {
  return (
    <div className={`flex items-center gap-1 border rounded-lg px-3 py-2 border-[#EBE9C6] ${className ?? ''}`}>
      <IconComponent width={18} height={18} className="text-[#D9D5A6] flex-shrink-0" />
      <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">{label}</span>
    </div>
  );
}