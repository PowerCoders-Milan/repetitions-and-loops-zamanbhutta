var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var numbers = 0
var letters= 0
arr1.forEach( function(number) {
    if (typeof number === "number"){
    numbers = numbers +1 ;
    } else {
        letters = letters + 1;
    }
    });
console.log(numbers);
console.log(letters);