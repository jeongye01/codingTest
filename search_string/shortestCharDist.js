//가장 짧은 문자거리
//문자열을 좌에서 우로 훑고
//우에서 좌로 훑는 방법.
function solution(str, t) {
  let distance = 1000;
  let answer = [];
  for (let x of str) {
    if (x === t) {
      distance = 0;
      answer.push(distance);
    } else {
      distance++;
      answer.push(distance);
    }
  }
  distance = 1000;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === t) distance = 0;
    else {
      distance++;
      answer[i] = Math.min(answer[i], distance);
    }
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
