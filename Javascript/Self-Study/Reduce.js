const arr=[
    {name:"SmartPhone", stock:50},
    {name:"Refrigerator", stock:20},
    {name:"TV", stock:70},
    {name:"Music System", stock: 40}
]

const max = arr.reduce((acc,user) => 
    user.stock>acc.stock?user:acc
)
console.log(max.name)