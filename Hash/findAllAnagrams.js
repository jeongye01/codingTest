// 모든 아나그램 찾기
function compareMaps(map1, map2) {
  console.log(map1);
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function solution(S, T) {
  let answer = 0;
  let tH = new Map(),
    sH = new Map();
  let tlen = T.length;
  for (let x of T) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  for (let i = 0; i < tlen - 1; i++) {
    if (sH.has(S[i])) sH.set(S[i], sH.get(S[i]) + 1);
    else sH.set(S[i], 1);
  }

  for (let i = tlen - 1; i < S.length; i++) {
    if (sH.has(S[i])) sH.set(S[i], sH.get(S[i]) + 1);
    else sH.set(S[i], 1);
    if (compareMaps(sH, tH)) answer++;
    if (sH.get(S[i - tlen + 1]) === 1) sH.delete(S[i - tlen + 1]);
    else sH.set(S[i - tlen + 1], sH.get(S[i - tlen + 1]) - 1);
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
