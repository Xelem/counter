// SOLUTION 1
// const counter = document.querySelector('#counter');
// const lower = document.querySelector('.prevBtn');
// const add = document.querySelector('.nextBtn');

// lower.addEventListener('click', lowerCount);
// add.addEventListener('click', addCount);

// function lowerCount() {
//   counter.innerHTML --;
//   if(counter.innerHTML < 0) {
//     counter.style.color = 'red';
//   } else if (counter.innerHTML == 0) {
//     counter.style.color = 'black';
//   }
// }

// function addCount() {
//   counter.innerHTML ++;
//   if(counter.innerHTML > 0) {
//     counter.style.color = 'green';
//   } else if (counter.innerHTML == 0) {
//     counter.style.color = 'black';
//   }
// }


// SOLUTION 2
// const buttons = document.querySelectorAll('.counterBtn');
// const count = document.querySelector('#counter');

// buttons.forEach(function(button) {
//   button.addEventListener('click', (onClick) => {
//     if (button.classList.contains('prevBtn')){
//       count.innerHTML --;
//     } else if (button.classList.contains('nextBtn')){
//       count.innerHTML ++;
//     }
//     if(count.innerHTML > 0) {
//           count.style.color = 'green';
//         } else if (count.innerHTML < 0) {
//           count.style.color = 'red';
//         } else{
//           count.style.color = 'black';
//         }
    
//   })
// })


// SOLUTION 3
const buttons = document.querySelectorAll('.counterBtn');
const count = document.querySelector('#counter');

buttons.forEach(function(button) {
  button.addEventListener('click', onClick)

  function onClick(){
    if(button.classList.contains('prevBtn')){
      count.innerHTML --;
    } else if (button.classList.contains('nextBtn')){
      count.innerHTML ++;
    }
    if(count.innerHTML > 0){
      count.style.color = 'green';
    } else if (count.innerHTML < 0) {
      count.style.color = 'red';
    } else{
      count.style.color = 'black';
    }
  }
})
