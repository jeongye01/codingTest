//k번째 큰 수
//set 자료구조는 중복을 제거해줌
function solution(n, k, arr) {
  let answer = 0;
  let sums = new Set(); //set 객체

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        sums.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  let sumsArr = Array.from(sums).sort((a, b) => b - a);

  answer = sumsArr[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
