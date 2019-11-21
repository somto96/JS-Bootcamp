var jsObjects = [{
        a: 1,
        b: 2
    },
    {
        a: 3,
        b: 4
    },
    {
        a: 5,
        b: 6
    },
    {
        a: 7,
        b: 8
    }
];

var result = jsObjects.findIndex((obj)=> {
    return obj.b === 6;
})
console.log(result)
// var index = jsObjects.indexOf(result);
// console.log(index)

// var newResult = {}
// for (var j = 0; j < result.length; j++) {
//     console.log(result[j]);
//     var obj = result[j]
//     newResult = {
//         ...newResult,
//         ...obj
//     }
// }

// console.log(newResult)

// jsObjects.forEach(myFunction);

// function myFunction(item, index) {
//    console.log(index, item)
//    console.log(jsObjects.includes(newResult))
// }

// var index = jsObjects.includes(newResult);
// console.log(index)