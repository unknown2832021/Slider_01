let slides = document.querySelectorAll('.image')
let slidesArray = Array.from(slides)

let prevbtn = document.querySelector('.prev')
let nextbtn = document.querySelector('.next')

function prevnext(){
    let currentImage = document.querySelector('.image.active')
    let currentImageIndex = slidesArray.indexOf(currentImage)

    let prev;
    let next;

    if(currentImageIndex == 0){
        prev = slidesArray[slidesArray.length - 1]
    } else {
        prev = slidesArray[currentImageIndex - 1]
    }
    if(currentImageIndex == slidesArray.length - 1){
        next = slidesArray[0]
    } else{
        next = slidesArray[currentImageIndex + 1]
    }
    return{prev, next}
}

function slider(){
    let currentImage = document.querySelector('.image.active')
    let currentImageIndex = slidesArray.indexOf(currentImage)
    let {prev, next} = prevnext()

    slidesArray.map((image, index) => {
        if(currentImageIndex == index){
            image.style.transform = 'translateX(0)'
        } else if(image == prev){
            image.style.transform = 'translateX(-100%)'
        } else if(image == next){
            image.style.transform = 'translateX(100%)'
        }
        image.addEventListener('transitionend', function(){
            image.classList.remove('smooth')
        })
    })
}

prevbtn.addEventListener('click', function(){
    let currentImage = document.querySelector('.image.active')
    let {prev} = prevnext()

    currentImage.classList.add('smooth')
    prev.classList.add('smooth')

    currentImage.classList.remove('active')
    currentImage.style.transform = 'translateX(100%)'
    prev.classList.add('active')
    prev.style.transform = 'translateX(0)'
    slider()
})

nextbtn.addEventListener('click', function(){
    let currentImage = document.querySelector('.image.active')
    let {next} = prevnext()
  
    currentImage.classList.add('smooth')
    next.classList.add('smooth')
    currentImage.classList.remove('active')
    currentImage.style.transform = 'translateX(-100%)'
    next.classList.add('active')
    next.style.transform = 'translateX(0)'
    slider()
})

   
