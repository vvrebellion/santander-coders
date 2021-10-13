//matrix

const guests = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }]

const entrance = guests.map(guest => 
guest.age > 18 ? `${guest.name} can go to The Matrix`
: `${guest.name} is under age!`)
console.log(output)