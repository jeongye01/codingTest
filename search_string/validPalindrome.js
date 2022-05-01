//유효한 팰린드롬
function solution(str) {
  let answer = "NO";
  //소문자가 아닌 것들(^)을 ''로 대치
  str = str.toLowerCase().replace(/[^a-z]/g, "");

  if (str === str.split("").reverse().join("")) answer = "YES";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
