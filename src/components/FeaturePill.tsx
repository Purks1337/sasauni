import Image from 'next/image';

interface FeaturePillProps {
  iconPath: string;
  label: string;
  className?: string;
}

export function FeaturePill({ iconPath, label, className }: FeaturePillProps) {
  return (
    <div className={`flex items-center gap-1 border rounded-[30px] px-6 py-1.5 border-[#EBE9C6] ${className ?? ''}`}>
      <Image src={iconPath} alt={label} width={18} height={18} className="text-white" />
      <span className="text-[#D9D5A6] text-sm sm:text-base ml-1">{label}</span>
    </div>
  );
}


