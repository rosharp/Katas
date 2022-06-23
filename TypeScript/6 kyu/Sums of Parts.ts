export function partsSums(ls: number[]): number[] {
	let sum: number = ls.reduce((sum, nv) => sum + nv, 0); 
	let accArr: number[] = [sum];
	for (let i = 1; i <= ls.length; i++) {
		sum -= ls[i-1];
		accArr.push(sum);
	}

	return accArr;
}

console.log(partsSums([0, 1, 3, 6, 10]));
// console.log(partsSums([0, 0, 0, 0, 0]));
// console.log(partsSums([]));
// console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));
