function mixin(target, ...sources) {
    Object.assign(target.prototype, ...sources);
}

const canFly = {
    fly() {
        console.log(`${this.name} is flying.`);
    }
};

class Bird {
    constructor(name) {
        this.name = name;
    }

    chirp() {
        console.log(`${this.name} is chirping.`);
    }
}

mixin(Bird, canFly);

const parrot = new Bird('Polly');
parrot.chirp(); // Output: Polly is chirping.
parrot.fly();    // Output: Polly is flying.
