new WOW().init();


$('.review-bottom-section').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows :false,
    autoplay:true,
    autoplaySpeed : 2000,
    responsive: [
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
    ]
});



let firstBtn = document.getElementById("slick-slide-control00")
let secondBtn = document.getElementById("slick-slide-control01")
let thirdBtn = document.getElementById("slick-slide-control02")
let fourthBtn = document.getElementById("slick-slide-control03")
let fithBtn = document.getElementById("slick-slide-control04")
let sixthBtn = document.getElementById("slick-slide-control05")
let changeImg = document.getElementById('needActive');
let open = document.getElementById('openBtn');
let nav = document.querySelector('.nav-items');
let screenWidth = window.innerWidth;
console.log(screenWidth);

firstBtn.innerHTML = `<hr class="slick-hr">`
secondBtn.innerHTML = `<hr class="slick-hr">`
thirdBtn.innerHTML = `<hr class="slick-hr">`

changeImg.addEventListener('mouseenter' , function(){
    changeImg.src = '/Image/Vector.svg'
})

changeImg.addEventListener('mouseleave' , function(){
    changeImg.src = '/Image/Vector-gray.png'
})


if(screenWidth < 1140 ){
    fourthBtn.innerHTML = `<hr class="slick-hr">`
    fithBtn.innerHTML = `<hr class="slick-hr">`
    sixthBtn.innerHTML = `<hr class="slick-hr">`
}




if(screenWidth < 688){
    nav.classList.add('hidden');
    console.log('gg');
}


open.addEventListener('click' , function(){
    nav.classList.toggle('hidden');
})