var operation = function(){
    this.add=function (a, b) {
        return a + b;
    }
    this.subtract=function (a, b) {
        return a - b;
    }
    this.multiply=function (a, b) {
        return a * b;
    }
    this.divide=function (a, b) {
        return a / b;
    }
}

var multiOperationHandler = function(output){
    this.output = output;
    this.addNumerator=function (a, b)    {
         return this.output.add(a, b);
    }
    this.subtracter=function (a, b) {
       return this.output.subtract(a, b);
    }
    this.multiplier=function (a, b) {
        return this.output.multiply(a, b);
    }
    this.divider=function (a, b) {
        return this.output.divide(a, b);
    }
}

function run(){
    const operations = new operation();
    const multiOperations = new multiOperationHandler(operations);
    console.log(multiOperations.addNumerator(10, 2));
    console.log(multiOperations.subtracter(10, 2));
    console.log(multiOperations.multiplier(10, 2));
    console.log(multiOperations.divider(10, 2));
}
run()