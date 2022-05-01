//숫자만 추출
function solution(str) {
  let answer = "";
  //숫자가 아닌 것들(^)을 ''로 대치
  answer = +str.replace(/[^0-9]/g, "");

  return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
