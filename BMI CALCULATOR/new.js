    const a = document.querySelector('form')
    console.log(a)
   

    a.addEventListener('submit', function(f){
f.preventDefault()
console.log(f)
const weight = 
parseInt(document.querySelector('#weight').value)
const height = 
parseInt(document.querySelector('#height').value)

const result = document.querySelector('#Result')
const bmi =(weight/((height*height)/10000)).toFixed(2)
result.innerHTML=bmi
console.log(weight)
console.log(height)
console.log(result)
     } )


