let startBtn = document.querySelector('#Start');
let div1 = document.querySelector('#div1');
let div2 = document.querySelector('#div2');
let form = document.querySelector('form');
let step = document.createElement('h1');
div1.appendChild(step);
let nextBtn = document.createElement('button');
nextBtn.innerText = 'Next';
let submitBtn = document.querySelector('#submit-btn');
submitBtn.innerText = 'Submit';
let input = document.querySelector('input');
form.style.display = 'none';

startBtn.addEventListener('click',()=>{
    startBtn.disabled = true;
    step.innerText = 'Think a two digit number.';
    nextBtn.style.paddingInline = '2rem';
    nextBtn.style.paddingBlock = '1rem';
    nextBtn.style.fontSize = '50px';
    nextBtn.style.fontWeight = '800';
    nextBtn.style.backgroundColor = 'rgb(5,253,5)';
    nextBtn.style.borderRadius = '20px';
    nextBtn.style.border = 'none';
    nextBtn.style.alignSelf = 'center';
    div1.appendChild(nextBtn);
});

nextBtn.addEventListener('click',()=>{
    step.innerText = 'Add both the digits of that number.';
    nextBtn.addEventListener('click',()=>{
        step.innerText = 'Now subtract the sum of both digits from that number.';
        nextBtn.addEventListener('click',()=>{
            step.innerText = 'Now enter any one digit of your resulted number.';
            form.style.display = '';
            form.style.alignSelf = 'center';
        });
    });
});

submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log(input.value)
    step.innerText = `Another digit of your resulting number is ${9 - input.value}`;
});

