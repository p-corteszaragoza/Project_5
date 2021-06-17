var index = 1;
showSlides(index);

function moveSlide(n) {
  showSlides(index += n);
}

function currentSlide(n) {
  showSlides(index = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        index = 1;
    }    
    if (n < 1) {
        index = slides.length;
    }
    for (var i = 0; i < slides.length; i++) 
        slides[i].style.display = "none";  
    
    for (var j = 0; j < dots.length; j++) 
        dots[j].className = dots[j].className.replace(" activeIndex", "");
    
    slides[index-1].style.display = "block";  
    dots[index-1].className += " activeIndex";
}