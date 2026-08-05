///selected elemnets

const link = document.querySelectorAll('.link')
const title = document.querySelector('.title')
const fillCircle = document.querySelectorAll('.fillCircle')


const summery = document.querySelectorAll('.summery')
const quantityItems = document.querySelectorAll('.quantityItems')
const quantityRows = document.querySelectorAll('.quantity')
const goBack = document.querySelector('.goBack')
const totalAmount = document.querySelector('.totalAmount')

const details = document.querySelectorAll('.details')
/// switching between tabs


let currentStep = 0
const state = [
       {section:document.querySelector('.products'),title:'Products'},
       {section:document.querySelector('.checkout'),title:'Checkout'},
       {section:document.querySelector('.newCard'), title:'New Card'}
]


/////go to the tabs function ==]]][[][][][\\\]////////////////\\\\\\\/\/\\\/\/\/\\/\/\\\/\/\/\/\/\/\/\/\/\

function  goToState(x){
       console.log('x: ',x)
       console.log('currentStep:',currentStep)
       state.forEach((val,i)=>{
              val.section.style.display= i === x ? 'flex' : 'none'
       })

       fillCircle.forEach((circle,i)=>{
              circle.classList.toggle('filling', i <= x)
              circle.innerHTML = `
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
              `
       })

       if(x == 0) goBack.style.display = 'none'
       if(x >= 1){
              goBack.style.display='flex'
              goBack.innerHTML = `
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="indigo" class="size-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

              `
       } 

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

///////FIRST TAB PRODUCT TAB /\/\/\/\/\////\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/*************************&&&&&&&&&&&&&&&%%%%%%%%%#######@@@@@!!!!!!!!??????//////////// */
////// select summary card

let vatRate = 0.15
let total
let VAT

const items = [
       {price:1234, quantity:1},
       {price:156, quantity:1}
]
updateTotals()
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
                     updateTotals()
                     val.closest('.quantity').children[1].innerText = items[index].quantity
              }else if(temp == 'minus'){
                     if( newQ > 1){
                            newQ -= 1
                             items[index].quantity = newQ
                             updateTotals()
                            val.closest('.quantity').children[1].innerText = items[index].quantity
                     }
              }
       })
})

function updateTotals(){
       let subTotal  =0
       items.forEach((item)=>{
              subTotal += (item.price) * (item.quantity)
       })

              VAT = subTotal * vatRate
              total = parseFloat(VAT + subTotal)
              details[0].children[1].innerText = subTotal
              details[1].children[1].innerText = VAT
              details[2].children[1].innerText = total
              totalAmount.innerText = '$' + total

       console.log(total)
}


console.log(items)
////// select summary card
///////FIRST TAB PRODUCT TAB /\/\/\/\/\////\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/*************************&&&&&&&&&&&&&&&%%%%%%%%%#######@@@@@!!!!!!!!??????//////////// */

///////second TAB checkout TAB /\/\/\/\/\////\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/*************************&&&&&&&&&&&&&&&%%%%%%%%%#######@@@@@!!!!!!!!??????//////////// */


