export function longestConsec(strarr: string[], k: number): string {
	let temp: string = '';
	let temp2: string;

	for (let i = 0; i < strarr.length; i++) {
		while (k > 0) {
			temp2 += strarr[i + k];
			k -= 1;
		}
		if (temp2.length > temp.length) {
			temp = temp2; 
		}
	}

	return temp;
}
