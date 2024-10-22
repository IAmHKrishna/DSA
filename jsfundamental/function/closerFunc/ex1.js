function operations() {
    function _validateNumber(num) {
        if (typeof num !== 'number'&& isNaN(num)) {
            throw new Error('Input must be a number');
        }
    }
    return {
        add: function (a, b) {
            _validateNumber(a);
            _validateNumber(b);
            return a + b;
        },
        subtract: function (a, b) {
            _validateNumber(a);
            _validateNumber(b);
            return a - b;
        }
    }
}

const curd = operations();
console.log(curd.add(10, "11"));
console.log(curd.subtract(10, 20))