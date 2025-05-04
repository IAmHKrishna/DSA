// you are a contractor tasked with painting a row of houses.
// Each house can be painted in one of three colors: red, blue, green. 
// th cost of  painting each house with each color is different.
// you must paint all the houses such that: no two adjacent houses have the same 
// color.your goal is to minimize the total cost to paint all houses.




// solution 1
var minCost = function (costs) {
    let [a, b, c] = [0, 0, 0];
    for (let [ca, cb, cc] of costs) {
        // console.log(ca, cb, cc,"ca, cb, cc")
        [a, b, c] = [Math.min(b, c) + ca, Math.min(a, c) + cb, Math.min(a, b) + cc];
        console.log(a, b, c,"a, b, c",ca,cb,cc)
    }
    return Math.min(a, b, c);
};

// solution 2
// var minCost = function (costs) {
//     for (let i = 1; i < costs.length; i++) {
//         costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
// }


console.log(minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]]))
// console.log(minCost([[1, 2, 2], [1, 4, 6], [7, 3, 2]]))