export function findUniq(arr: number[]) {
	const res = arr.filter(function(v) {
		return arr.indexOf(v) == arr.lastIndexOf(v);
	})

	return res[0];
}

console.log(findUniq([0, 0, 0.55, 0, 0]));
