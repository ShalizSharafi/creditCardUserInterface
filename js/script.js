///selected elemnets

const link = document.querySelectorAll('.link')
const title = document.querySelector('.title')
const fillCircle = document.querySelectorAll('.fillCircle')
const circleAfter = document.querySelectorAll('.circleAfter')


const summery = document.querySelectorAll('.summery')
const quantityItems = document.querySelectorAll('.quantityItems')
const quantityRows = document.querySelectorAll('.quantity')
/// switching between tabs

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

/// switching between tabs

////// select summary card

const items = [
       {price:1234, quantity:1},
       {price:156, quantity:1}
]

quantityItems.forEach((val)=>{
       val.addEventListener('click',()=>{

              let whichQuantityRows = val.closest('.quantity')
              let index = Array.from(quantityRows).indexOf(whichQuantityRows)
              console.log(index)

              let newQ = Number(val.closest('.quantity').children[1].innerText)
              let temp = val.getAttribute('data-sign')
              if(temp == 'plus'){
                     newQ += 1
                     items[index].quantity = newQ
                     val.closest('.quantity').children[1].innerText = items[index].quantity
              }else if(temp == 'minus'){
                     if( newQ > 1){
                            newQ -= 1
                             items[index].quantity = newQ
                            val.closest('.quantity').children[1].innerText = items[index].quantity
                     }
              }
       })
})

console.log(items)
////// select summary card