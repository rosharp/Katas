export function findOutlier(integers: number[]): number {
	let res: number;
	let even: number = 0;
	let odd: number = 0;

	for (let i: number = 0; i < integers.length; i++) {
		if (integers[i] % 2 != 0) {
			odd++;
		} else if (integers[i] % 2 == 0) {
			even++;
		};
	}

	if (even > odd) {
		// search for an odd number
		integers.forEach(num => {
			if (num % 2 !== 0) res = num;
		});
	} else if (even < odd) {
		// search for an even number
		integers.forEach(num => {
			if (num % 2 === 0) res = num;
		});
	}
	
	return res;
}

console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 1, 0, 1, 1]));
