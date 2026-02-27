// src/components/DynamicIcon.tsx
// https://chatgpt.com/c/68bfb51f-9498-8321-b0e0-891ac31e64dc

import { DynamicIcon as LucideDynamicIcon } from 'lucide-react/dynamic';
import type { LucideProps } from 'lucide-react';

export interface DynamicIconProps {
  name: string;
  className?: string;
  size?: string | number;
  package?: string;
}

type Props = DynamicIconProps & LucideProps;

export default function DynamicIcon({ name, className, ...rest }: Props) {
  // Convert PascalCase to kebab-case (e.g., 'ArrowRight' -> 'arrow-right')
  const kebabCaseName = name
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();


    return (
      <LucideDynamicIcon 
        name={kebabCaseName as any} 
        className={className ?? "w-5 h-5 text-gray-700"} 
        {...rest}
      />
    )
}