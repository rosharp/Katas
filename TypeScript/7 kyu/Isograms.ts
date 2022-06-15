export function isIsogram(str: string): boolean {
	return !str.match(/([a-z]).*\1/i);
 };
