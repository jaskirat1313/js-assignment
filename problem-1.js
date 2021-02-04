var ROW = 5;
var COL = 5;

// A function to check if a

function isSafe(M, row, col, visited) {
  var ROW;
  var COL;

  return (
    row >= 0 &&
    row < ROW &&
    col >= 0 &&
    col < COL &&
    M[row][col] &&
    !visited[row][col]
  );
}

// A utility function to do DFS

function DFS(M, row, col, visited) {
  const rowNbr = Array(-1, -1, -1, 0, 0, 1, 1, 1);
  const colNbr = Array(-1, 0, 1, -1, 1, -1, 0, 1);

  // Mark this cell as visited
  visited[row][col] = true;

  // Recur for all
  // connected neighbours
  for (let k = 0; k < 8; ++k)
    if (isSafe(M, row + rowNbr[k], col + colNbr[k], visited))
      DFS(M, row + rowNbr[k], col + colNbr[k], visited);
}

// The main function that returns

function countIslands(M) {
  let visited = new Array(M);

  let count = 0;
  for (let i = 0; i < ROW; ++i)
    for (let j = 0; j < COL; ++j)
      if (M[i][j] && !visited[i][j]) {
        DFS(M, i, j, visited);
        count++;
      }

  return count;
}

// Driver Code
const M = Array([
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1],
]);

console.log("Number of islands is: ", countIslands(M));
