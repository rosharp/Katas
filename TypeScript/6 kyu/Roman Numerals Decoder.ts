export function solution(roman: string): number {
	const hash: {[key: string]: number} = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};

	let acc: number = 0;

	for (let i = 0; i < roman.length; i++) {
		if (roman[i] == 'I' && roman[i + 1] == 'V') {
			acc += 4;
			i++;
		}
		else if (roman[i] == 'I' && roman[i + 1] == 'X') {
			acc += 9;
			i++;
		}
		else if (roman[i] == 'X' && roman[i + 1] == 'L') {
			acc += 40;
			i++;
		}
		else if (roman[i] == 'X' && roman[i + 1] == 'C') {
			acc += 90;
			i++;
		}
		else if (roman[i] == 'C' && roman[i + 1] == 'D') {
			acc += 400;
			i++;
		}
		else if (roman[i] == 'C' && roman[i + 1] == 'M') {
			acc += 900;
			i++;
		}
		else {
			acc += hash[roman[i]];
		}
	}

	return acc;
}

console.log(solution('MMVIII'));
console.log(solution('MDCLXVI'));
	