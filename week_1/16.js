// while
let i = 0;

// while (i < 100) {
//   if (i >= 5 && i % 5 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// do ~ while
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// break: 멈추기, continue: 다음으로 넘어가기
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
