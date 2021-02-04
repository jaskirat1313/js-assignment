function chooseBestSum(t, k, ls) {
    var biggestCount = 0;
    var recurseTowns = function(townsSoFar, lastIndex) {
    townsSoFar = townsSoFar || [];
    // case-1
    if (townsSoFar.length === k) {
       var sumDistance = townsSoFar.reduce((a,b)=>a+b);
          if (sumDistance <= t && sumDistance > biggestCount) {
             biggestCount = sumDistance;
          }
       return; 
    }
 //case2
    for (var i = lastIndex + 1 || 0; i < ls.length; i++) {
       recurseTowns(townsSoFar.concat(ls[i]), i);
    }
 }
 recurseTowns();
 return biggestCount || null;
 }
 console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]));