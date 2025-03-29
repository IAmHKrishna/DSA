class Product {
    constructor() { /* */ }

    getDetails() { /* */ }
    saveToDb() {/* */ }
    displayInFrontEnd() { /* */ }
}

class DigitalProduct extends Product{
    // saveToDb() is extended but not necessary }
}

// ---- //
// Refactor
// It's better to have specific interfaces, rather than a single general interface
class Product {
    constructor() { /* */ }

    getDetails() { /* */ }
    displayInFrontEnd() { /* */ }
}

class PhysicalProduct extends Product {
    constructor() {
        super()
    }
    saveToDb() { /* */ }
}

class DigitalProduct extends Product{
    // saveToDb() is not extended
}