// Polymorphism in a Real-World Example:
// Let’s say we have a system where we need to send notifications
//  via different channels (email, SMS, or push notifications),
//   but the method of sending should be the same (sendNotification).


// In this example, the sendNotification method is polymorphic,
//  as the method's behavior changes depending on the type 
//  of notification object that is being used (email, SMS, or push notification).
// Example:

class Notification {
    sendNotification() {
        console.log("Sending a generic notification...");
    }
}

class EmailNotification extends Notification {
    sendNotification() {
        console.log("Sending an email notification.");
    }
}

class SMSNotification extends Notification {
    sendNotification() {
        console.log("Sending an SMS notification.");
    }
}

class PushNotification extends Notification {
    sendNotification() {
        console.log("Sending a push notification.");
    }
}

// Using polymorphism
const notifications = [
    new EmailNotification(),
    new SMSNotification(),
    new PushNotification(),
];

notifications.forEach((notification) => {
    notification.sendNotification(); // Different output for different notifications
});
