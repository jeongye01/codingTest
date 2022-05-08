//멘토링
function solution(arr) {
  let answer = 0,
    m = arr.length, //test 수
    n = arr[0].length; //학생 수
  for (let i = 0; i < n; i++) {
    let tmp = arr[0].slice(i + 1);

    for (let j = 1; j < m; j++) {
      if (arr[0][i] === arr[j][i]) {
        continue;
      } else if (tmp[0] === arr[j][i]) {
        tmp.shift();
      }
    }
    answer += tmp.length;
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
