// 배열
// 1. 생성
// 1-1. 기본 생성
let fruits = ["사과", "바나나", "오렌지"];
console.log(fruits);

// 1-2. 크기 지정
let numbers = new Array(5);

// 2. 요소 접근
console.log(fruits[0]);

// 3. 배열 메서드
// 3-1. push
fruits.push("수박");
console.log(fruits);

// 3-2. pop: 마지막 요소 삭제
fruits.pop();
console.log(fruits);

// 3-3. shift: 첫번째 요소 삭제
fruits.shift();
console.log(fruits);

// 3-4. unshift(): 맨 앞에 요소 추가
fruits.unshift("포도");
console.log(fruits);

// 3-5. splice(n,m,z): n번째 요소부터 m개 삭제하고 그 안에 z를 넣어줘
fruits.splice(1, 1, "키위", "복숭아");
console.log(fruits);

// 3-6. slice(n,m): n번째 인덱스부터 m번째 인덱스 앞까지 잘라서 새로운 배열로 만들어줘
let slicedFruits = fruits.slice(0, 1);
console.log(slicedFruits);

let numbersArr = [1, 2, 3, 4, 5];

// 3-7. forEach
// 요소 하나하나 돌아가면서 어떤 작업을 하고 싶을 때
// 매개변수 자리에 함수를 넣는 것: 콜백함수
numbersArr.forEach(function (item) {
  console.log(item);
});

// 3-7. map
// 기존에 있었던 배열을 가공하여 새로운 배열을 만들어 줌
// 항상 원본 배열의 길이만큼 return 된다.
// return값이 없을 시 undefined
let newNumbers = numbersArr.map(function (item) {
  return item * 2;
});

console.log(newNumbers);

// 3-7. filter
let filteredNumbers = numbersArr.filter(function (item) {
  return item % 2 === 1;
});
console.log(filteredNumbers);

// 3-7. find
let findNumbers = numbersArr.find(function (item) {
  return item > 3;
});

console.log(findNumbers);
