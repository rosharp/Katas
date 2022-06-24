// Hint: x ^ 2 - 4 y ^ 2 = (x - 2y) (x + 2y).

// x = (a + b)/ 2  
// y = (b - a)/ 4
// x^2 - 4y^2 = n => ab = n

export function solequa(n: number): [number, number][] {
  let result: Array<[number, number]> = [], b: number, x: number, y: number;
  for (let a = 1;a <= Math.sqrt(n); a++) {
    if(Number.isInteger(b = n / a)){
      if(Number.isInteger(x = (b + a) / 2)){
        if(Number.isInteger(y = (b - a) / 4)){
          result.push([x, y]);
        }
      }
    }
  }

  return result;
}

console.log(solequa(5));
