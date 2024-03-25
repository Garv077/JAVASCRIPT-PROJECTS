
const buttons=     document.querySelectorAll(".button")

const body= document.querySelector('body')

buttons.forEach(function (button){

button.addEventListener('click',function(e){
    console.log(e)
    if(e.target.id==='orange'){
        console.log('o',Math.random()*100)
        body.style.backgroundColor= e.target.id }
    if(e.target.id==='blue'){ console.log("b",Math.random()*100)
        body.style.backgroundColor= e.target.id }

    if(e.target.id==='yellow'){ console.log('y',Math.random()*100)
        body.style.backgroundColor= e.target.id }

    if(e.target.id==='red'){ console.log('r',Math.random()*100)
        body.style.backgroundColor= e.target.id }
   
        cancelable:true})
})



