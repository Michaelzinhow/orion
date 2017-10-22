$("#slider").owlCarousel({ 
      slideSpeed : 300,
      paginationSpeed : 400,
      autoPlay : 5000,
      singleItem:true
});
$("ul.navbar-nav > li > a").on('click', function(event){
	event.preventDefault();
	$("html, body").animate({scrollTop:$(this.hash).offset().top}, 1200);
})
