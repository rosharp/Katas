export function wave(str: string) {
	let res = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] == ' ') continue;
		res.push(Array.from(str, (c, j) => i === j ? c.toUpperCase() : c).join(''));
	}

	return res;
}

console.log(wave("hello"));
