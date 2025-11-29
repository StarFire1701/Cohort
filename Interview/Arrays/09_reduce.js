const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = arr.reduce((acc, value) => {
    return acc + value;
}, 10)
console.log(sum)

// In  reduce , the datatype of Accumulator is returned;

let ActivityUser = [
    { user: "Abhay", activitycount: 45 },
    { user: "Rahul", activitycount: 33 },
    { user: "Niraj", activitycount: 60 },
]

let most_active_user = ActivityUser.reduce((acc, currentvalue) => {
    return currentvalue.activitycount > acc.activitycount ? currentvalue : acc;
})
console.log(most_active_user)
