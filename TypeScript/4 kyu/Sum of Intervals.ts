export function sumOfIntervals(intervals: [number, number][]): number {
	let res: number[] = [];

	intervals.forEach(inter => {
		for(let i: number = inter[0]; i < inter[1]; i++) {
			res.push(i);
		}
	})

	res = [...new Set(res)];
	console.log(res);
	return res.length;
}

console.log(sumOfIntervals([[1, 5], [6, 10]]));
// console.log(sumOfIntervals([[1, 4], [7, 10], [3, 5]]));
