function mergeSorting(arr,key) {
    // console.log(arr,key,"===================0===")
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);    
    // console.log(left, right,"===================1===")

    return merge(mergeSorting(left,"left"), mergeSorting(right,"right"));
}

function merge(left, right) {
    console.log(left, right,"===================2")

    if (!Array.isArray(left) || !Array.isArray(right)) {
        return [];
    }
    if (left.length === 0) {
        return right;
    }
    if (right.length === 0) {
        return left;
    }
    const result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
        console.log(result,"result1")
    }
    console.log(result,"result12")
return [...result, ...left, ...right];

    // return result.concat(left, right);
}

console.log(mergeSorting([3, 6, 8, 10, 1, 2, 1]))