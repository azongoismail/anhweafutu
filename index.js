
const readMoreBtn = document.querySelector('.read-more');
const readLessBtn = document.querySelector('.less-btn');
const hideContent = document.querySelectorAll('.hidden');

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


readMoreBtn.addEventListener('click', function(){
	hideContent.forEach((hidden)=>{
		hidden.style.display = 'block';
	})
	readMoreBtn.style.display = 'none';
	readLessBtn.style.display = 'block';
})
readLessBtn.addEventListener('click', function() {
	hideContent.forEach((hidden)=>{
		hidden.style.display = 'none'
	})
	readMoreBtn.style.display = 'block'
	readLessBtn.style.display = 'none'
} )
document.querySelector('.fa-bars').addEventListener('click',function () {
	 const toggle = document.querySelector('.menu')
	 toggle.classList.toggle('menu-items');
})