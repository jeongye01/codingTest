//아나그램
function solution(str1, str2) {
  let answer = "YES";
  //for Hash
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return "NO";
    else sH.set(x, sH.get(x) - 1);
  }

  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
