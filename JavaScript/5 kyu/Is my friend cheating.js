function removeNb(n) {
  let res = [];
  let sum = n * (n + 1) / 2;

  for (let a = 1; a < n + 1; a++) {
    b = (sum - a) / (a + 1)
    if (b <= n && a * b == (sum - a - b)) {
      if (a % 1 == 0 && b % 1 == 0) {
        res.push([a, b]);
      }
    }
  }

  return res;
}

console.log(removeNb(26))

