const obj1 ={
    name:"shubham",
    age:22,
    address:"india"
}

console.log(obj1);

const obj2 = {
    name:"shubham1",
    age:22,
    address:"india",
    __proto__:obj1
}

console.log(obj2);