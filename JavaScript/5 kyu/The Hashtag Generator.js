function generateHashtag (str) {
	let s = (str.replace(/\s\s+/g, ' ')).split(' ');

	if (str.trim().length === 0 ) {
		return false;
	} 

	for (let i = 0; i < s.length; i++) {
		s[i] = s[i].charAt(0).toUpperCase() + s[i].substr(1);
	}

	let res = s.unshift('#') && s.join('');

	return res.length < 141 ? res : false;
}

console.log(generateHashtag('                '));
console.log(generateHashtag("#Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))
console.log(generateHashtag("Codewars"));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(''.length);
