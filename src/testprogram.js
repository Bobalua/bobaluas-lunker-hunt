/*  1. define a list of users
    2. capitalize their first name
    3. console log upper-cased list of users
    -accomplish using map

const listOfUsers = [
  { name: 'bagelo' },
  { name: 'megalo' },
  { name: 'zinefer' },
];*/

// const name = "name";

// const listOfUsers = [
//     { name: 'bagelo' },
//     { name: 'megalo' },
//     { name: 'zinefer' }
// ];

// const capitalUsers = listOfUsers.map(user => {
//     const container = {};
    
//     // const firstLetter = user.name.charAt(0);
//     // const firstLetterCap = firstLetter.toUpperCase();
//     // const remainingLetters = user.name.slice(1);
//     // const newName = firstLetterCap + remainingLetters;

//     const newName = user.name.charAt(0).toUpperCase() + user.name.slice(1);
//     container["name"] = newName;
//     return container;
// })

// console.log(capitalUsers);

const listOfUsers = [
    { name: 'bagelo' },
    { name: 'megalo' },
    { name: 'zinefer' },
];

const capitalUsers = listOfUsers.map(user => {
    user.name = user.name.charAt(0).toUpperCase() + user.name.slice(1);
    return user;
})

console.log(capitalUsers);










