//부분 수열의 합
//대표적인 투 포인터
//for문이 한번 쭉 돌게 해야함
function solution(m, arr) {
  let answer = 0;
  let start = 0,
    n = arr.length,
    sum = 0;
  for (let end = 0; end < n; end++) {
    sum += arr[end];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[start++];
      if (sum === m) answer++;
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
