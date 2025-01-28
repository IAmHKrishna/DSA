let userDetails = {
    name: "Rahul",
    id: 123,
    email: "yH9Ig@example.com",
    phone: 1234567890,
    age: 20
}
const updateObject ={
    age:(value)=>{
        userDetails.age = value;
    },
    name:(value)=>{
        userDetails.name = value;
    },
    email:(value)=>{
        userDetails.email = value;
    },
    phone:(value)=>{
        userDetails.phone = value;
    }
}

const handleOnChange = (key,event) =>{
    const operation = updateObject[key];
    if(operation) operation(event.target.value);
}