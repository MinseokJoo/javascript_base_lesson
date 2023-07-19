// Map
// Map, Set의 목적: 데이터의 구성, 검색, 사용을 효율적으로 처리 => 기존의 객체 또는 배열보다

// 1. Map
// - Key - Value
// - Key에 어떤 데이터 타입 (유형)도 들어올 수 있다.
// Map은 키가 정렬된 순서로 저장되기 때문이다.
// 기능
// => 검색, 삭제, 제거, 여부 확인

const myMap = new Map();
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);

for (const key of myMap.keys()) {
  console.log(key);
}

for (const value of myMap.values()) {
  console.log(value);
}

for (const entry of myMap.entries()) {
  console.log(entry);
}

console.log(myMap.size); // map의 사이즈
console.log(myMap.has("two")); // key 기반 검색
