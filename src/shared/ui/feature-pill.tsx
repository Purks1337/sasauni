import type { FC, SVGProps } from 'react';

interface FeaturePillProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
  className?: string;
}

export function FeaturePill({ icon: IconComponent, label, className }: FeaturePillProps) {
  return (
    <div className={`flex items-center gap-2 border rounded-lg px-3 py-2 bg-[#31312C] border-[#201F1A] ${className ?? ''}`}>
      <IconComponent width={24} height={24} className="text-[#D9D5A6] flex-shrink-0" />
      <span className="text-[#D9D5A6] text-base">{label}</span>
    </div>
  );
}