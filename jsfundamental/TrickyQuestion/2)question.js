// 1)
function calculateInterest(currentBalance, customerAge) {
    try {
        if (customerAge > 150) {
            throw new Error();
        }

        if (currentBalance > 0) {
            let interest = (currentBalance * 2.5) / 100;
            if (customerAge > 60) {
                interest += 50;
            }
            return interest;
        }

        throw new Error();
    } catch {
        console.error(
            "Interest cannot be calculated on zero balance or the age cannot be greater than 150"
        );
    }
}

calculateInterest(0, 60);

// The program will print 'Interest cannot be calculated on zero balance or the age cannot be greater than 150


// suggestion answer
function calculateInterest1(currentBalance, customerAge) {
    try {
        if (customerAge <= 0 || customerAge > 150) {
            throw new Error("Invalid age");
        }
        if (currentBalance <= 0) {
            throw new Error("Invalid balance");
        }

        let interest = (currentBalance * 2.5) / 100;
        if (customerAge > 60) {
            interest += 50;
        }
        return interest;
    } catch (e) {
        console.error(e.message);
        return null;
    }
}

calculateInterest1(0, 60);
// =======================================================
// 4)
const sensorReading = [1, 2, 3, [null, 5, [4, 10], 89, "20", [[[["96"]]]]]];

function convert() {
    const flatArray = sensorReading.flat(5);//??
    console.log(flatArray);
    const mapped = flatArray.map((temperature)=>temperature*2);
    console.log(mapped);
}

convert();
// ====================================================================================
// 5)
const obj = {
    value: 10,
    get double() {
      return this.value * 2;
    },
  };
  
  console.log(obj.double); // 20