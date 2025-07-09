let globalvar = "I am global"

 console.log(`Before function global variable is ${globalvar}`)


function modifyglobal(){
    globalvar = "This has been modified inside function"
    let blockedscopedvar = "This is scoped inside block"
    console.log(`${blockedscopedvar}`)
    console.log(`Inside function global variable is ${globalvar}`)
}
modifyglobal()
console.log(`Outside function global variable is ${globalvar}`)
