let user ={
    name: "John",
    age: 30
}


function userInfo(city,state){
    return `${this.name} is ${this.age} years old from ${city},${state}`
}



console.log(userInfo.call(user,"chapra","bihar"))
console.log(userInfo.apply(user,["ahm","gujrat"]))
const result = userInfo.bind(user,"lksdf","3333")
console.log(result())
const result1 = userInfo.bind(user)
console.log(result1("cpr","bihar"))