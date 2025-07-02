class Person{
   constructor(fname,lname){
    this.fname=fname;
    this.lname=lname;
   }
   get_full_name(){
    return `${this.fname} ${this.lname}`
   }
   
}

 class Person2 extends Person{
    
 }

const p1=new Person('Raj','Patel')
const p2=new Person2('Rohit','Sharma')
console.log(p1)
console.log(p2)
console.log(p1.get_full_name())
console.log(p2.get_full_name())

