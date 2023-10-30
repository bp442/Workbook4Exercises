"use strict";

let contact = {
    name : "Brian",
    address : "404 NoneYa Drive",
    city : "Business",
    state : "NJ",
    zip : "01010"
};

printContact(contact);

function printContact(contact){
    console.log(contact.name);
    console.log(contact.address);
    console.log(contact.city);
    console.log(contact.state);
    console.log(contact.zip);
}