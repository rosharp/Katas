export const isPangram = (phrase: string): boolean => {
	return 'abcdefghigklmnopqrstuvwxyz'
    .split('').every(i => phrase.toLowerCase().includes(i));
}
