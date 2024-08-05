// 함수선언
// function getArea(width, height) {
//     let area = width * height;
    
//     console.log(area);
// }

// getArea(10, 20);
// getArea(30, 20);
// getArea(120, 200);

function getArea(width, height) {
    let area = width * height;
    function another() {
        console.log("another");
    }

    another();
    
    return area;
}

let area1 = getArea(10, 20)
console.log(area1);

let area2 = getArea(30, 20);
console.log(120, 200);

getArea(120, 200);