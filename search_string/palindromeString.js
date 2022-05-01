//회문 문자열
function solution(str) {
  let answer = "NO";
  str = str.toUpperCase();
  if (str === str.split("").reverse().join("")) answer = "YES";

  return answer;
}

let str = "gooG";
console.log(solution(str));
