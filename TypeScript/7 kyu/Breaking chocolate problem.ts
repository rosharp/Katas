export function breakChocolate(n: number, m: number): number {
	if (n <= 0 || m <= 0) {
		return 0;
	}
	
	return n * m - 1;
}

console.log(breakChocolate(2, 93));
