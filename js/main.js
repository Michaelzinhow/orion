//FUnção de configuração do Slider
$("#slider").owlCarousel({ 
      slideSpeed : 300,
      paginationSpeed : 400,
      autoPlay : 5000,
      singleItem:true
});

//Função que cria um efeito de rolagem na página
$("ul.navbar-nav > li > a").on('click', function(event){
	event.preventDefault();

	$('ul.navbar-nav li').removeClass('active');
	$(this).parent().addClass('active');
	$("html, body").animate({scrollTop:$(this.hash).offset().top-50}, 1200);
});

//Função que deixa a barra de navegação Fixa
$(window).scroll(function() {
	var scrollTopAtual = $(this).scrollTop();

	if (scrollTopAtual > 200) {
		$('#navegacao').addClass('navegacao-fixa');
	}else{
		$('#navegacao').removeClass('navegacao-fixa');
	}
});

