/*SLIDER STARTS*/
const slideShowElements = document.querySelectorAll(".slider-element");
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');




let countElements = 1;



setInterval(() => {
    countElements++;
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");
    if(countElements > slideShowElements.length){
        slideShowElements[0].classList.add("current");
        countElements = 1;
    }else{
        currentElement.nextElementSibling.classList.add("current");
    }
    
}, 5000);
nextBtn.addEventListener('click', ()=>{
    countElements++;
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");
    if(countElements > slideShowElements.length){
        slideShowElements[0].classList.add("current");
        countElements = 1
    }else{
        currentElement.nextElementSibling.classList.add("current");
    }
})
previousBtn.addEventListener('click', ()=>{
    countElements--;
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");
    if(countElements < 1){
        slideShowElements[slideShowElements.length -1].classList.add("current");
        countElements = slideShowElements.length -1;
    }else{
        currentElement.previousElementSibling.classList.add("current");
    }
    console.log(countElements)
})
/*SLIDER ENDS*/

