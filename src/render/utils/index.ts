import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Elegantly merge Tailwind CSS classes.
 * See https://ui.shadcn.com/docs/installation/manual Step 7 for more information.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}