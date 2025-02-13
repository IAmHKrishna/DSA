// recursive helpler method
function getOddNumArrFromArrList(arr = []) {
    if (!arr || arr.length === 0) return []
    let oddArrList = []
    function oddNumberChecker(arrList) {
        const num = arrList[0]
        if (num && (num % 2 > 0)) {
            oddArrList.push(num)
            arrList = arrList.slice(1)
            if (arrList.length) {
                oddNumberChecker(arrList)
            }
        } else {
            arrList = arrList.slice(1)
            if (arrList.length) {
                oddNumberChecker(arrList)
            }
        }


    }
    oddNumberChecker(arr)
    return oddArrList

}

console.log("output-", getOddNumArrFromArrList([1, 2, 3, 4, 5]))