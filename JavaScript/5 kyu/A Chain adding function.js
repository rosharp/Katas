function add(n) {
    let addNext = (x) => {
    return add(n + x);
  };

  addNext.valueOf = () => {
    return n;
  };

  return addNext;
}
