// Function scoped, cant be accessed out the function that its declared, it can be updated and recdeclared
function compare(){
    var name = "naima"
    console.log(name)
}
compare()

// Let variable is Blocked scope, can not be redclared, but can be updated
function test(){
    if(true){
        let age = 30
        console.log(age)
    }
    
}
test()


// Const variable is Blocked scope, can not be redclared nor be updated

function me(){
    const age = 50
    if(true){
        
    }
    console.log(age)
}
me()

