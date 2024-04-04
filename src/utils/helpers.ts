import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// Helper functions for general use cases

// Safely merges classNames to ensure proper styling via 'clsx' package
export const cn = (...classNames: ClassValue[]) => {
  return twMerge(clsx(classNames));
};
