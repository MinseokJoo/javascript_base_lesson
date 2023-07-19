// 변수, 상수

// 기억하고 싶은 값을 메모리에 저장한다.
// 읽어들여 재사용한다.

/* 변수를 사용하는 이유 
'10+20+30+40'의 결과값을 4번째 줄, 10번째 줄 .... 사용 빈도가 높을 때 필요할 때마다 저 식들을 사용하는 것은 효율적이지 못하다.*/

// 변수의 5가지 주요 개념
// 변수 이름 : 저장된 값의 고유 이름 (myVar)
// 변수 값 : 변수에 저장된 값 ("Hello World")
// 변수 할당 : 변수에 값을 저장하는 행위 (myVar에 "Hello World"를 저장)
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위 (var, let const의 키워드를 이용해 컴퓨터에게 myVar라는 변수를 만들어줘!)
// 변수 참조 : 변수에 할당된 값을 읽어 오는 것 (c가 a와 b를 참조했다!)

var myVar = "Hello World";

var a = 10;
var b = 20;
var c = a + b;

// 변수를 선언할 수 있는 3가지 방법 : var, let, const

// 1. var
var studyVar = "Hello world, var";

// 선언과 할당이 동시에 이루어지지 않아도 된다.
var studyVar1;
studyVar1 = "Hello world, var1";

// 재선언이 가능하다.
var studyVar = "Test Var";

// 재할당이 가능하다.
studyVar = "Good Bye, var";

console.log(studyVar);

// 2. let
let studyLet = "Hello world, let";

// 선언과 할당이 동시에 이루어지지 않아도 된다.
let studyLet1;
studyLet1 = "Hello world, let1";

// 재할당이 가능하다.
studyLet = "Good Bye, let";

console.log(studyLet);

// 3. const
const studyConst = "Hello world, const";
console.log(studyConst);
