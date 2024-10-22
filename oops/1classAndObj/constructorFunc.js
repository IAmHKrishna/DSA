//Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function (object) {
    console.log(object, this,"sdklsdkflsk111")
    return 'atack with ' + this.weapon
}
Elf.prototype.build=function(object){
    self =this
    function building(){
        return `${self.name} build home`
    }
    return building()
}


// for accessing this bind fuction with this
// -----------------------------------------------------
// Elf.prototype.build=function(object){
//     function building(){
//         console.log( this,"print")
//         return `${this.name} build home`
//     }
//     return building.bind(this)
// }
// ---------------------------------------------------
//  function inside constructor function
// Elf.prototype.build=function(object){
//     function building(){
        // console.log( this,"print") // here this is global object
//         return `${this.name} build home`
//     }
//      building()
// }
// -----------------------------------------
// Elf.prototype.attack =  (object)=> {
//     console.log(object, this)//undefined {}
//     return 'atack with ' + this.weapon
// }



// Elf.isPrototypeOf = (object) => {
//     // console.log(object, this,"sdklsdkflsk==========") //Elf {name: "Sam", weapon: "bow"} {}
// }
const sam = new Elf('Sam', 'bow');
const peter = new Elf('Peter', 'bow');
// console.log(Elf.__proto__)
// console.log(Elf.prototype)
console.log(sam.build())
sam.attack()
console.log(Elf.isPrototypeOf(sam), "sdklsdkflsk")