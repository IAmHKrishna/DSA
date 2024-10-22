topic 
================
    1) Module //encapsulation
    2) Singleton 
    3) Observer 
    4) Factory
    5) Adopter

**1) Module Pattern:**

* The Module Pattern is used to encapsulate private and public variables and methods using closures. It allows you to create self-contained modules, ensuring that internal data is hidden while exposing only what is necessary.
  
* **Purpose:** Encapsulates logic and exposes only necessary parts.


1) **Singleton Pattern:**

* The Singleton Pattern restricts the instantiation of a class or object to a single instance. It's used when you need only one instance of a class and need to ensure that there is only one shared instance throughout the application.
  
* **Purpose**: Ensures only one instance of an object is created and used.
  
* The **Singleton** object is implemented as an immediate anonymous function. The function executes immediately by wrapping it in brackets followed by two additional brackets. It is called anonymous because it doesn't have a name.
  
* The getInstance method is Singleton's gatekeeper. It returns the one and only instance of the object while maintaining a private reference to it which is not accessible to the outside world.
  
* The getInstance method demonstrates another design pattern called Lazy Load. Lazy Load checks if an instance has already been created; if not, it creates one and stores it for future reference. All subsequent calls will receive the stored instance. Lazy loading is a CPU and memory saving technique by creating objects only when absolutely necessary.

3) **Observer Pattern:**

The **Observer Pattern** defines a one-to-many relationship between objects. When one object (the subject) changes its state, all its dependents (observers) are notified and updated automatically. It’s commonly used in event-driven programming.

The **Observer pattern** offers a subscription model in which objects subscribe to an event and get notified when the event occurs. This pattern is the cornerstone of event driven programming, including JavaScript. The Observer pattern facilitates good object-oriented design and promotes loose coupling.


4) **Factory Pattern:**

* The **Factory Pattern** provides a way to create objects without specifying the exact class of the object that will be created. It provides an interface for creating objects, where the individual classes or object creation can be determined dynamically at runtime.
  
* A Factory Method creates new objects as instructed by the client. One way to create objects in JavaScript is by invoking a constructor function with the new operator. There are situations however, where the client does not, or should not, know which one of several candidate objects to instantiate. The Factory Method allows the client to delegate object creation while still retaining control over which type to instantiate.

5) **Adapter Pattern**
   
The **Adapter Pattern** in JavaScript is used when you want to allow two incompatible interfaces to work together. The adapter acts as a bridge between the client and a service, making the service interface compatible with what the client expects.

Example: Adapter Pattern in JavaScript
Scenario:
Suppose you have a **payment gateway** system. Your application is currently working with PayPal, but now you need to integrate **Stripe**. Both systems have different interfaces for processing payments, and you don't want to change your entire codebase to accommodate Stripe's interface.

Using the **Adapter Pattern**, you can create an adapter that converts Stripe's interface into one that your existing PayPal code can use.