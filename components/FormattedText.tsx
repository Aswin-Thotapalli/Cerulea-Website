import React from 'react';
import { cn } from "@/lib/utils";

interface FormattedTextProps {
  text: string;
  className?: string; // Optional className for the bold tags
}

export function FormattedText({ text, className }: FormattedTextProps) {
  if (!text) return null;

  // Split by **text** markers
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
          const content = part.slice(2, -2);
          return (
            <strong key={index} className={cn("font-bold", className)}>
              {content}
            </strong>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
}
