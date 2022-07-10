function topThreeWords(text) {
  let regex = ".*[a-zA-Z].*";
  if (text.match(regex)) {
    let wordMap = new Map();
    text.split(' ').forEach(word => {
      if (word) {
        word = word.toLowerCase();
        if (wordMap.has(word)) {
          let count = wordMap.get(word);
          count++;
          wordMap.set(word, count);
        } else {
          wordMap.set(word, 1);
        }
      }
    })
    const sortedWordMap = new Map([...wordMap.entries()].sort((a, b) => b[1] - a[1]));

    let result = Array.from(sortedWordMap.keys()).filter((word, index) => index < 3);
    result = result.map(res => {
      res = res.replace(/[/.,]/g, '')
      if (res !== "") {
        return res
      }
    })
    return result.filter(res => res !== undefined)

  } else {
    return [];
  }
}

function topThreeWords1(text) {
  let dict = new Map();
  text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
    let word = match.toLowerCase();
    dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
  });
  dict.delete("'");
  return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0].slice(0, 3));
}

console.log(topThreeWords('Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.'));

