/**
 * Utility function for combining CSS class names.
 * Filters out falsy values and joins remaining strings.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
