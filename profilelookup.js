// Profile Lookup Module
var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@gmail.com",
        "phone": "123-456-7890",
        "address": "123 Main St, Anytown, USA",
        "likes": ["hiking", "reading", "coding"],
        "dislikes": ["traffic", "loud noises"]
    },
    {
        "firstName": "Jane",
        "lastName": "Smith",
        "email": "jane.smith@gmail.com",
        "phone": "987-654-3210",
        "address": "456 Elm St, Othertown, USA",
        "likes": ["cooking", "traveling", "music"],
        "dislikes": ["waiting in line", "crowds"]
    },
    {
        "firstName": "Alice",
        "lastName": "Johnson",
        "email": "alice.johnson@gmail.com",
        "phone": "555-123-4567",
        "address": "789 Oak St, Sometown, USA",
        "likes": ["painting", "photography", "gardening"],
        "dislikes": ["rude people", "pollution"]
    },    
];

function lookupProfile(key, value) {                    
    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === key) {
            return contacts[i][value] ||  "Profile not found";
        }
    }
    return "Profile not found";
};
var data = lookupProfile("John", "likes");
console.log(data); // Output: ["hiking", "reading", "coding"]
