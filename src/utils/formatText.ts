export function formatMarkdown(
  text: string, 
  options?: { 
    boldClass?: string; 
    italicClass?: string;
  }
): string {
  if (!text) return '';

  const boldClass = options?.boldClass || 'font-extrabold text-slate-950 dark:text-white';
  const italicClass = options?.italicClass || 'italic font-medium opacity-90';

  let result = text
    // Replace double asterisks **bold**
    .replace(/\*\*(.*?)\*\*/g, `<strong class="${boldClass}">$1</strong>`)
    // Replace single asterisks *italic*
    .replace(/\*(.*?)\*/g, `<em class="${italicClass}">$1</em>`)
    // Clean up any remaining stray asterisks
    .replace(/\*{1,2}/g, '');

  return result;
}
