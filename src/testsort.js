const ten = { name: 'b', score: 10 };
const fourTwenty = { name: 'chode', score: 420 };
const three = { name: 'dobe', score: 3 }; 

const leaderboard = [
    { name: 'j', score: 69 },
    ten,
    fourTwenty,
    three
];

leaderboard.sort((a, b) => {
    return a.score - b.score; // <--
});

console.log(leaderboard);