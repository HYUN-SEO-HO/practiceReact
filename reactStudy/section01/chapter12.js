// 1. 함수 표현식 (호이스팅의 대상 x)
function funcA() {
    console.log("funcA");
}

let varA = funcA;
console.log(varA);
varA();

let varB = function() { // 익명 함수라고 부름. 
    console.log("funcB");
};

varB();

// 2. 화살표 함수 
let varC = (value) => {
    console.log(value);
    return value + 1;
};

console.log(varC(10));