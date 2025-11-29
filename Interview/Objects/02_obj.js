const batsman = [
    { name: "Rohit Sharma", runs: 22000 },
    { name: "Virat Kohli", runs: 25000 },
    { name: "Shubman Gill", runs: 2000 },
    { name: "KL Rahul", runs: 5000 }
]

const res = Object.groupBy(batsman, ({ runs }) =>
    runs > 10000 ? "Legendary Batsman" : "Make more runs"
)
console.log(res)