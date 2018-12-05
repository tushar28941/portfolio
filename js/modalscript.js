$(function(){
	$('.galeria .contenedor-imagen').on('click', function(){
		$('#modal').modal;
		var ruta_imagen = ($(this).find('img').attr('src'));
		var titulo = ($(this).find('#title-modal').text());
		var texto = ($(this).find('#text-modal').text());
		$('.card-img-top').attr('src', ruta_imagen);
		$('.card-title').html(titulo);
		$('.card-text').html(texto);
	});

	$('#modal').on('click', function(){
		$('#modal').modal('hide');
	});
})