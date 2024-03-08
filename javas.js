let img = document.getElementsByTagName('img')[0]
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', (e)=>{
    let value = prompt('enter you link')
    console.log('====================================');
    console.log(value);
    console.log('====================================');
    img.src = String(value)
})
// let slide= document.getElementsByclassName("slide")
//  slide.onInput= inc_value ;
//  function inc_value(){
//     const x= this.value *10;
//     img.style.filter = `blur(${x}px)`;
//  }
let blurSlider = document.querySelector('.blur input');
let rSlider = document.querySelector('.bor input');
let wSlider = document.querySelector('.bw input');
let colorInput = document.querySelector('.bco input');
let grSlider = document.querySelector('.bs input');
let brSlider = document.querySelector('.bright input');
let hueSlider = document.querySelector('.hue input');
let contrastSlider = document.querySelector('.cont input');

blurSlider.addEventListener('input', function() {
    let x = this.value * 0.5;
    img.style.webkitFilter = `blur(${x}px)`;
});
rSlider.addEventListener('input' ,function(){
    let x = this.value * 0.5;
    img.style.borderRadius = `${x}px`;
},)
wSlider.addEventListener('input',function(){
    let x = this.value;
    img.style.borderWidth=`${x}px`;
})
colorInput.addEventListener( 'input',function(){
    let x= this.value;
    img.style.borderColor= x;
})
brSlider.addEventListener( 'input',function(){
    let x= this.value*2;
    img.style.filter= `brightness(${x}%)`;
})
hueSlider.addEventListener( 'input',function(){
    let x= this.value;
    img.style.filter= `hue-rotate(${x}deg)`;
})
contrastSlider.addEventListener( 'input',function(){
    let x= this.value*10;
    img.style.filter= `contrast(${x}%)`;
})
grSlider.addEventListener( 'input',function(){
    let x= this.value;
    img.style.filter= `grayscale(${x}%)`;
})

// let brslides = document.getElementsByClassName("bor")
// slides.forEach(slide => {
//     slide.addEventListener('bor', function() {
//         let x = this.value * 0.5;
//         img.style.webkitFilter = `blur(${x}px)`;
//     });
// });