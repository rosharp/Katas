function chooseBestSum(t, k, ls) {
  let biggestCount = 0;
  let recurseTowns = (townsSoFar, lastIndex) => {
    townsSoFar = townsSoFar || [];
    
    if (townsSoFar.length === k) {
      let sumDistance = townsSoFar.reduce((a, b) => a + b);
      if (sumDistance <= t && sumDistance > biggestCount) {
        biggestCount = sumDistance;
      }
    return;
    }
    
    for (let i = lastIndex + 1 || 0; i < ls.length; i++) {
      recurseTowns(townsSoFar.concat(ls[i]), i);
    }
  }
  recurseTowns();
  
  return biggestCount || null;
}
