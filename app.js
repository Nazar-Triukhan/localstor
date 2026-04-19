// const name = 'Nazar'

// const userData = {
//     name,
//     age: 15 ,
//     lastName : 'dfghjk'
// }

  

// localStorage.setItem('name',JSON.stringify(userData))

// console.log(localStorage.getItem('name'));


const inp = document.querySelector('.inp')
const btn = document.querySelector('.btn')
const text = document.querySelector('.text')

btn.addEventListener('click',() => {
    text.innerHTML = inp.value
    
})


// const checkbox = document.querySelector('.checkbox')
// const check = document.querySelector('.check')
// const body = document.querySelector('body')

// if (localStorage.getItem('th') === 'true') {
//     checkbox.classList.add('activ')
//     body.classList.add('activ')
// }

// checkbox.addEventListener('click', () => {
//     checkbox.classList.toggle('activ')
//     body.classList.toggle('activ')

//     if(body.classList.contains('activ')){
//         localStorage.setItem('th', true)
//     }else {
//         localStorage.setItem('th', false)
//     }


// })