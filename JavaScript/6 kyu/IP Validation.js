function isValidIP(str) {
	let s = str.split('.');
	for (let i in s) {
		if (s.length === 0) {
			return false;
		}

		else if (s[i] === '') {
			return false;
		}

		else if (s[i] === undefined || null) {
			return false;
		}

		else if (/[a-zA-Z]/.test(str)) {
			return false;
		}

		else if (/\r|\n/.exec(str)) {
			return false;
		}

		else if (/\s/.test(str)) {
			return false;
		}

		else if (isNaN(s[i])) {
			return false;
		}

		else if (s[i].length > 1 && s[i][0] === '0') {
			return false
		}
		
		else if (s.length > 4 || s.length < 4) {
			return false;
		}
		
		else if (Number(s[i]) > 255 || Number(s[i] < 0)) {
			return false;
		} 
	} 

	return true;
}

console.log(isValidIP("0.0.0.0")); //true
console.log(isValidIP("12.255.56.1")); //true

console.log(isValidIP('')); //false
console.log(isValidIP('abc.def.ghi.jkl')); //false
console.log(isValidIP('12.34.56')); //false
console.log(isValidIP('\n1.2.3.4')); //false
console.log(isValidIP('12.34.56.-7')); //false
console.log(isValidIP('123.456.789.0')); //false

console.log(isValidIP('1e0.1e1.1e2.2e2')); //false
console.log(isValidIP(' 1.2.3.4')); //false
console.log(isValidIP('1.2.3.4 ')); //false
console.log(isValidIP('247.168..241')); //false
