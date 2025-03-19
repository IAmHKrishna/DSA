function userDeatail(name,age){
   this.name = name;
   this.age = age
}

// const user1 = new userDeatail("ram",22);
// console.log(user1)

userDeatail.prototype.getUserDetail = function(){
   return `name is ${this.name} and age is ${this.age}`
}
const user1 = new userDeatail("ram",22);
console.log(user1.getUserDetail());

// ===============================================
class userDeatail1 {
   constructor(name,age){
      this.name = name;
      this.age = age
   }
   getUserDetail(){
      return `name is ${this.name} and age is ${this.age}`
   }
}
const user12 = new userDeatail1("ram",22);
console.log(user12.getUserDetail());