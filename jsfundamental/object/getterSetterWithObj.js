let person = {
    name: "shubham",
    age: 20,
    get personname() {
        return this.name
    },
    set personname(name) {
        this.name = name
    },
    updatename: function (name) {
        this.name = name
    }
}
console.log(person.personname)
person.personname = "kumar"
console.log(person.personname)

person.updatename("krishna")
console.log(person.personname)
