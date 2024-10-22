// new bind this
function CarFunc(name,color){
    this.name=name;
    this.color = color;
}
const carObj = new CarFunc("Maruti","white");


// implicit binding this

const CarObj = {
    name:"Maruti",
    color:"white",
    detial:function(){
        return `car name is ${this.name} and color is ${this.color}`
    }
}


//  explicit bining this


const CarObj1 = {
    name:"Maruti",
    color:"white",
    detialAfter1m:function(){
        return `car name is ${this.setTimeout(() => {
            
        }, 10000)}`
    }.binding(window)
}


//  arrow function 

const CarObj2 = {
    name:"Maruti",
    color:"white",
    detial:()=>{
         const innerFunc =()=>{
             return `car name is ${this.name} and color is ${this.color}`
        }
        return innerFunc
    }
}
