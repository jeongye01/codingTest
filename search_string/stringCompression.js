//문자열 압축

function solution(str) {
  let answer = "";
  let cnt = 0;

  for (let i = 0; i < str.length; i++) {
    //중복 없는 첫 문자
    if (cnt === 0) {
      answer += str[i];
      cnt++;
    } else if (str[i - 1] === str[i]) {
      //중복

      cnt++;
    } else {
      //중복 끝남 ,cnt 초기화
      answer += cnt;
      answer += str[i];
      cnt = 0;
    }
  }

  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
