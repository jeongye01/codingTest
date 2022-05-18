//올바른 괄호
function solution(str) {
  let answer = "YES";
  let stack = [];
  for (let x of str) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) answer = "NO";

  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
