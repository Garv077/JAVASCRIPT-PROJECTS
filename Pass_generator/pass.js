let a = document.getElementById('Screen')
function passFunc(){
    let pass="";
    let passLength = 10;
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    for (let index = 0; index < passLength; index++) {
    let i = Math.floor(Math.random()*10)
    
    let newstr = str[i]
    pass = pass.concat(newstr)  
}

return(pass)

}
function genePass(){
let a1 = passFunc()

a.innerHTML = a1;

}
