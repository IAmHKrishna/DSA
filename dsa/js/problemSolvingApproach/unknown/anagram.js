function getAnagram(arr){
    let map = {}
    let result = []
    for(let i=0;i<arr.length;i++){

        let word = arr[i]
        let sorted = word.split("").sort().join("")
        if(map[sorted]){
            map[sorted].push(word)
        }else{
            map[sorted] = [word]
        }
    }
    for(let key in map){
        // console.log(map)
        map[key].length > 1 ? result.push(map[key]) : result.push(map[key])
    }
    return result

}


console.log(getAnagram(["eat","tea","tan","ate","nat","bat"]))