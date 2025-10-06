// src/components/DynamicIcon.tsx
// https://chatgpt.com/c/68bfb51f-9498-8321-b0e0-891ac31e64dc

import { icons } from "@/lib/icons";

type IconName = keyof typeof icons;

export default function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name as IconName] || icons["SquircleDashed"]; // fallback if not found
  return <Icon className={className ?? "w-5 h-5 text-gray-700"} />;
}