// The goal of this exercise is to convert a string to a new string 
// where each character in the new string is "(" if that character appears only once 
// in the original string, or ")" if that character appears more than once 
// in the original string. Ignore capitalization when determining if a character is a duplicate.

export function duplicateEncode(word: string) {
	let dict = {};

	for (let ch of word) {
		if (dict[ch.toLowerCase()]) {
			dict[ch.toLowerCase()] == ')'
		} else {
			dict[ch.toLowerCase()] == '('
		}
	}
  return word.split('').map(ch => dict[ch.toLowerCase()]).join(''); 
}

console.log(duplicateEncode("lllll"));
