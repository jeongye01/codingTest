//격자판 최대합
function solution(arr) {
  let ans = Number.MIN_SAFE_INTEGER,
    n = arr.length;

  for (let i = 0; i < n; i++) {
    let rowSum = 0,
      colSum = 0;

    for (let j = 0; j < n; j++) {
      rowSum += arr[i][j];
      colSum += arr[j][i];
    }
    ans = Math.max(ans, rowSum, colSum);
  }
  let diaSum1 = 0,
    diaSum2 = 0;
  for (let i = 0; i < n; i++) {
    diaSum1 += arr[i][i];
    diaSum2 += arr[i][n - i - 1];
  }
  ans = Math.max(ans, diaSum1, diaSum2);

  return ans;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
