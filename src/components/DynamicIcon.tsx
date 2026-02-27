// src/components/DynamicIcon.tsx
// https://chatgpt.com/c/68bfb51f-9498-8321-b0e0-891ac31e64dc

import { DynamicIcon as LucideDynamicIcon } from 'lucide-react/dynamic';

export interface DynamicIconProps {
  name: string;
  size?: string | number;
  className?: string;
  package?: string;
}

export default function DynamicIcon({ name, className, ...rest }: DynamicIconProps) {
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