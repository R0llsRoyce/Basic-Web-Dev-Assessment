var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 



$(document).ready(function(){
	var cartCountValue = 0;
	var cartCount = $('.cart.count');
	$(cartCount).text(cartCountValue);

	$('.cart-btn').on('click', function(){
		var cartbtn = this;
		var cartCountPosition = $(cartCount).offset();
		var btnPosition = $(this).offset();
		var leftPos =
		cartCountPosition.left < btnPosition.left
		? btnPosition.left - (btnPosition.left - cartCountPosition.left)
		: cartCountPosition.left;

	var topPos =
		cartCountPosition.top < btnPosition.top
		? cartCountPosition.top
		: cartCountPosition.top;
		$(cartbtn)
		.append("<span class='count'>1</span>");

		$(cartbtn).find(".count").each(function(i, count){
			$(count).offset({
        		left: leftPos,
				top: topPos
			})
			.animate(
			{
				opcity: 0
			},
			800,
			function(){
				$(this).remove();
				cartCountValue++;
				$(cartCount).text(cartCountValue);

			}
			);
		});
	});
});
