class Observer {
    constructor() {
        this.observers = [];
    }

    suscribe(observer) {
        this.observers.push(observer);
    }

    unsuscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    someLogicOperation(message) {
        this.notifySubscribers(message);
    }
    notifySubscribers(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}

const observer = new Observer();


// observer.suscribe({
//     update(message) {
//         console.log(message);
//     }
// });

// observer.notifySubscribers("Hello");


class suscriber {
    update(message) {
        console.log(message);
    }
}

const subscriber1 = new suscriber();
const subscriber2 = new suscriber();

observer.suscribe(subscriber1);
observer.suscribe(subscriber2);
observer.someLogicOperation("Hello");