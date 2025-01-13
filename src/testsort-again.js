const arrayToSort = [
    2,
    1,
    3
];

arrayToSort.sort((a, b) => {
    console.log('a: ', a);
    console.log('b: ', b);
    console.log();
    return a - b; // <---
});

console.log(arrayToSort);