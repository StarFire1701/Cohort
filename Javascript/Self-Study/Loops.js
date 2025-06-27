//For of loop which is generally used for arrays

const myarray=[1,3,4,5,6,7,8]
for(const num of myarray){
    // console.log(num)
    // process.stdout.write(num + " ")
}

//For in loop which is used for objects
let tempobj = {
    language:"Javascript",
    course: "Chai-aur-code Cohort",
    course_instructor: "Hitesh Sir and Piyush Sir"
};

for(const key in tempobj){
    // console.log(`${key} shortcut is for ${tempobj[key]}`)
}

//For each loop 
const coding=["JS","C++","Java","Python"]
// coding.forEach(function(val){
//     console.log(val)
// })

// coding.forEach((item)=>{
//     console.log(item)
// })

const students = [
  { name: "A", marks: 85 },
  { name: "B", marks: 90 },
];
students.forEach((student)=>{
    console.log(`${student.name} scored ${student.marks}`)
})