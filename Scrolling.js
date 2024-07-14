var slideIndex = 1;
showDivs(slideIndex);

// Button controls
function plusDivs(n) {
    showDivs(slideIndex += n);
}

// Automatic sliding
function autoSlide() {
    slideIndex++;
    showDivs(slideIndex);
    setTimeout(autoSlide, 5000); // Change image every 3 seconds
}

// Show slides
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("pop");
    var y = document.getElementsByClassName("pop1");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
    y[slideIndex-1].style.display = "block";
}
// Initialize the automatic sliding
autoSlide();