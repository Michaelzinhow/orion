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

//Função que mascara campo do telefone
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

//Script da modal
$('#myModal').modal('hide');



