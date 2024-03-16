const alternatives = [
  {text:"", images:"images/1.jpg"},
  {text:"", images:"images/2.jpg"},
  {text:"", images:"images/3.jpg"},
  {text:"", images:"images/4.jpg"},
  {text:"", images:"images/5.jpg"},
  {text:"", images:"images/6.jpg"},
  {text:"", images:"images/7.jpg"},
  {text:"", images:"images/8.jpg"},
  {text:"", images:"images/9.jpg"},
  {text:"", images:"images/11.jpg"},
  {text:"", images:"images/12.jpg"},
  {text:"", images:"images/13.jpg"},
  {text:"", images:"images/14.jpg"},
  {text:"", images:"images/15.jpg"},
  {text:"", images:"images/16.jpg"},
  {text:"", images:"images/17.jpg"},
  {text:"", images:"images/18.jpg"},
  {text:"", images:"images/19.jpg"},
  {text:"", images:"images/20.jpg"},
  {text:"", images:"images/21.jpg"},
  {text:"", images:"images/22.jpg"},]
const ohyes = {text:"Fantastic! You're my Valentine; brace for laughter and love :) , my phone's getting rusty from the lack of calls! It's time to oil up those conversation gears...Just one call please", images:"images/cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;
let count_no = 0;
function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Yes"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'Click to Play Movie'){
          //let randomIndex = Math.floor(Math.random() * alternatives.length);
          //let alternative = alternatives[randomIndex];
          updateDisplay(alternatives[count_no]);
          count_no = (count_no + 1) % alternatives.length; // Increment count_no and loop back to 0 when it reaches the end


      }
  })
})