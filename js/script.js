///selected elemnets

const link = document.querySelectorAll('.link')
const title = document.querySelector('.title')
const fillCircle = document.querySelectorAll('.fillCircle')


const summery = document.querySelectorAll('.summery')
const quantityItems = document.querySelectorAll('.quantityItems')
const quantityRows = document.querySelectorAll('.quantity')
const goBack = document.querySelector('.goBack')
const totalAmount = document.querySelector('.totalAmount')
const cardSection = document.querySelector('.cardSection')

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
       {price:120, quantity:1},
       {price:110, quantity:1}
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


////go to the previous tab

goBack.addEventListener('click',()=>{
       if(currentStep > 0){
       goToState(currentStep - 1)
       }
})



///////second TAB checkout TAB /\/\/\/\/\////\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/*************************&&&&&&&&&&&&&&&%%%%%%%%%#######@@@@@!!!!!!!!??????//////////// */

const cards = [
       {name:'Bauer Targaryen Moriarty',number:'2234678754431234',expiry:'2024',cvv:'234',id:1},
       {name:'Blucifer Cornelius Rex',number:'1991200205079102',expiry:'2026',cvv:'199',id:2}
]

function cardsFunction(){
       cardSection.innerHTML = ''
              let nextCardId = 3
       cards.forEach((item)=>{
              let card = document.createElement('div')
              card.classList.add('card')
              let last4 = item.number.slice(-4)
              console.log(last4)
              let masked = '*'.repeat((item.number.slice(0,-4)).length)
              console.log(masked)
              let fullmasked = masked + last4
              let displayNumber = fullmasked.match(/.{1,4}/g).join(' - ')
              card.dataset.id=item.id
              card.innerHTML=`
               <p class="text-white text-[15px] font-medium flex items-center justify-center name">${item.name}</p>
                                          <div class="row justify-start gap-2">
                                                 <span class="digits number">${displayNumber}</span>
                                          </div>
                                          <div class="row">
                                                 <div class="w-fit flex-wrap flex *:w-full *:items-center *:flex *:justify-center">
                                                 <span class="text-off-white text-[12px]">valid</span>
                                                 <span class="text-off-white text-[12px] expiry">${item.expiry}</span>
                                                 </div>
                                                 <div class="w-fit flex-wrap flex *:w-full *:items-center *:flex *:justify-center">
                                                        <span class="text-off-white text-[12px]">cvv</span>
                                                        <span class="text-off-white text-[12px] cvv ">${item.cvv}</span>
                                                 </div>
                                          </div>
              `
              
              cardSection.appendChild(card)
              
       })
       let selectedCardId = null
       cardSection.addEventListener('click',(e)=>{
              let selectedCard = e.target.closest('.card')
              console.log(selectedCard)
              let cardId = Number(selectedCard.getAttribute('data-id'))
              let currentCard = cards.find((val)=> val.id == cardId)
              console.log('currencard: ', currentCard)
              selectedCardId = cardId

              let allCards = cardSection.querySelectorAll('.card')
              allCards.forEach((item)=>{
                     item.classList.toggle('selected', item === selectedCard )
              })
             })
}
cardsFunction()

