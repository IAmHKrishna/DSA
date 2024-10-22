2) **Encapsulation**
- Encapsulation refers to the bundling of data (variables) and methods (functions) inside a class and controlling access to them.
- In JavaScript, access to properties can be controlled - using the # symbol for private fields (ES2021).

- Encapsulation in JavaScript refers to the practice of bundling data (variables) and methods (functions) together within an object or class, while restricting access to some of the object’s properties. The idea is to keep the internal implementation details hidden and only expose what's necessary, creating a clear boundary between the object’s internal state and the outside world.

Encapsulation helps in:

    Data protection: Preventing direct access to sensitive information.
    Modular code: Keeping the internal workings of objects separate from their external interface.
    In JavaScript, encapsulation can be implemented in two main ways:

    *) Using closures to simulate private variables.
    *) Using ES6 classes with private fields (introduced in ES2021).


# Why Use Encapsulation?

**Controlled Access**: You can control how the internal state of the object is accessed or modified, ensuring that only valid changes are made.

**Data Protection:** Sensitive data is hidden from the outside world, reducing the risk of accidental changes.

**Simplifies Code:** Users of the class or object don’t need to know the internal workings, just how to interact with the exposed methods.

In summary, encapsulation in JavaScript helps to create a clear interface for working with objects while keeping the details of their implementation hidden. This improves code modularity and maintainability.