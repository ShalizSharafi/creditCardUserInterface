///selected elemnets

const link = document.querySelectorAll('.link')
const title = document.querySelector('.title')
const fillCircle = document.querySelectorAll('.fillCircle')
const circleAfter = document.querySelectorAll('.circleAfter')

// const products = document.querySelector('.products')
// const checkout = document.querySelector('.checkout')
// const newCard = document.querySelector('.newCard')


// link[0].addEventListener('click',()=>{
//        products.style.display='none'
//        checkout.style.display='flex'
//        title.innerText='checkout'
//        fillCircle[1].style.backgroundColor='purple'
       
// })

// link[1].addEventListener('click',()=>{
//        products.style.display='none'
//        checkout.style.display='none'
//        newCard.style.display='flex'
//        title.innerText='new card'
//        fillCircle[2].style.backgroundColor='purple'

// })


let currentStep = 0
const state = [
       {section:document.querySelector('.products'),title:'Products'},
       {section:document.querySelector('.checkout'),title:'Checkout'},
       {section:document.querySelector('.newCard'), title:'New Card'}
]

function  goToState(x){
       state.forEach((val,i)=>{
              val.section.style.display= i === x ? 'flex' : 'none'
       })

       title.innerText = state[x].title

       currentStep = x
}


link.forEach((val)=>{
       val.addEventListener('click',()=>{
              if(currentStep < state.length -1){
                     goToState(currentStep + 1)
              }
       })
})

goToState(0)

