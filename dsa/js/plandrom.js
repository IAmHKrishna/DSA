const isPallondrom = (str)=>{
    let rev = str.split('').reverse().join('')
    return str === rev
}

console.log(isPallondrom('racecar'))