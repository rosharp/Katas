snail = function (arr) {
	let finalArray = [];

	while (arr.length) {
		finalArray.push(...arr.shift())
		for (let i = 0; i < arr.length; i++) {
			finalArray.push(arr[i].pop());
		}
		finalArray.push(...(arr.pop() || []).reverse())
		for (let i = arr.length - 1; i >= 0; i--) {
			finalArray.push(arr[i].shift())
		}
	}
	return finalArray;
}

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
