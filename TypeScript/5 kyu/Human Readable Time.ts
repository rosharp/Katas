export function humanReadable(seconds: number): string {
	let hours: number = Math.floor(seconds / 3600);
	let secondsWithoutHours = seconds % 3600;
	let min: number = Math.floor(secondsWithoutHours / 60);
	let sec: number = secondsWithoutHours % 60; 

	return ('0' + hours).slice(-2) + ':' + ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2);
}

console.log(humanReadable(86399));
