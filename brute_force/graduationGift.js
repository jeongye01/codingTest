//졸업 선물
function solution(m, products) {
  let answer = 0,
    n = products.length;

  products.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    let money = m - (products[i][0] / 2 + products[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && products[j][0] + products[j][1] > money) break;
      if (j !== i && products[j][0] + products[j][1] <= money) {
        money -= products[j][0] + products[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
