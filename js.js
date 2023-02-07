var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

var slidesCount = sliderImages.length;



var currentSlide = 1;

let slideNumberElement = document.getElementById("slide-number")

// prev & next btn
let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("prev")

// click btn next and prev
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

// create ul
let paginationElement = document.createElement("ul")
paginationElement.setAttribute("id", "pagination-ul")

for(let i = 1; i <= slidesCount; i++){
    let paginationItem = document.createElement("li")
    paginationItem.setAttribute("data-index", i)
    paginationItem.appendChild(document.createTextNode(i))
    
    paginationElement.appendChild(paginationItem)
    
}
document.getElementById('indicators').appendChild(paginationElement)

let paginationCreateUl = document.getElementById("pagination-ul")

let paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"))

for(let i = 0; i < paginationsBullets.length; i++){
    paginationsBullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute("data-index"))
        theChecker()

    }
}

theChecker()

// function next slide
function nextSlide(){
    if(nextBtn.classList.contains('disabled')){
        return false
    }else{
        currentSlide++;
        theChecker();
    }
}
// function prev slide
function prevSlide(){
    if(prevBtn.classList.contains('disabled')){
        return false
    }else{
        currentSlide--;
        theChecker();
    }
}

function theChecker(){
    slideNumberElement.textContent = 'slide # ' + (currentSlide) + ' of ' + (slidesCount)
    removeAllActive()
    sliderImages[currentSlide - 1].classList.add('active')
    paginationCreateUl.children[currentSlide-1].classList.add('active')

    // check if current slide is the first
    if(currentSlide == 1){
        prevBtn.classList.add('disabled')
    }else{
        prevBtn.classList.remove('disabled')
    }

    if(currentSlide == slidesCount){
        nextBtn.classList.add('disabled')
    }else{
        nextBtn.classList.remove('disabled')
    }
}

function removeAllActive(){
    sliderImages.forEach((img)=>{
        img.classList.remove("active")
    })
    paginationsBullets.forEach((bullet)=>{
        bullet.classList.remove("active")
    })
}










// console.log(nextBtn)