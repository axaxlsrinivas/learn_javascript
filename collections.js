// Java Script Collections - JSON Ojbects
// This file contains JavaScript objects that can be used to store and manipulate data collections.
var collection = {
    "2548": {
        "id": 2548,
        "name": "Collection A",
        "items": [
            {
                "itemId": 1,
                "itemName": "Item 1",
                "quantity": 10
            },
            {
                "itemId": 2,
                "itemName": "Item 2",
                "quantity": 5
            }
        ],
        "createdDate": "2023-01-01"
    },
    "2549": {
        "id": 2549,
        "name": "Collection B",
        "items": [
            {
                "itemId": 3,
                "itemName": "Item 3",
                "quantity": 20
            },
            {
                "itemId": 4,
                "itemName": "Item 4",
                "quantity": 15
            }
        ],
        "createdDate": "2023-02-01"
    },
    "2550": {
        "id": 2550,
        "name": "Collection C",
        "items": [
            {
                "itemId": 5,
                "itemName": "Item 5",
                "quantity": 30
            },
            {
                "itemId": 6,
                "itemName": "Item 6",
                "quantity": 25
            }
        ],
        "createdDate": "2023-03-01"
    }
};

// Deep copy of the collection object
var collectionCopy = JSON.parse(JSON.stringify(collection));   
console.log("Original Collection:", collection);
console.log("Deep Copied Collection:", collectionCopy);

// Function to add a new collection
function updatedCollection(id, prop, Value) {
    if (Value === "") {
        delete collection[id][prop];
    } else if (prop === "items") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(Value);
    } else {
        collection[id][prop] = Value;
    }
}
updatedCollection(2548, "phone", "0987654321");
updatedCollection(2549, "items", { itemId: 7, itemName: "Item 7", quantity: 40 });
updatedCollection(2550, "createdDate", "2023-04-01");

console.log("Updated Collection 2548:", collection[2548]);
console.log("Updated Collection 2549:", collection[2549]);
console.log("Updated Collection 2550:", collection[2550]);

