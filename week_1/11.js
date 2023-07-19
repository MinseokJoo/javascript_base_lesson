// 조건문의 중첨
let age = 20;
let gender = "남성";

if (age >= 20) {
  if (gender === "여성") {
    console.log("성인 여성");
  } else if (gender === "남성") {
    console.log("성인 남성");
  }
} else {
  if (gender === "여성") {
    console.log("미성년 여성");
  } else if (gender === "남성") {
    console.log("미성년 남성");
  }
}
