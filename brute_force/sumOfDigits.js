//자릿수의 합

function solution(n, arr) {
  let answer = -1,
    maxSum = -1;

  for (let x of arr) {
    let sum = String(x)
      .split("")
      .reduce((pre, cur) => pre + parseInt(cur), 0);
    if (maxSum < sum) {
      maxSum = sum;
      answer = x;
    } else if (maxSum === sum) {
      if (answer < x) answer = x;
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
