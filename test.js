// let room = {
//     number: 23
// };

// let meetup = {
//     title: "Conference",
//     occupiedBy: [{ name: "John" }, { name: "Alice" }],
//     place: room
// };

// // 순환 참조
// room.occupiedBy = meetup;
// meetup.self = meetup;

// // console.log(room);
// // console.log(meetup);

// console.log(JSON.stringify(meetup, (key, value) => {
//     // console.log(`key : ${key}, value : ${value}`);
//     return (key != "" && value == meetup) ? undefined : value;
//     // if (key === 'occupiedBy' || key === 'self') {
//     //     return undefined
//     // } else {
//     //     return value;
//     // }

// }));


let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup은 room을 참조합니다
};

room.occupiedBy = meetup; // room은 meetup을 참조합니다

console.log(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));