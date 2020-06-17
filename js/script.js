	$(document).ready(function(){
		/* Caja 01 */
		$('#caja-01 a').mouseover(function(){
			$('#caja-01 .info-interna').fadeIn(500);
		});
		
		$('#caja-01 a').mouseleave(function(){
			$('#caja-01 .info-interna').fadeOut(300);
		});
		
	
		
		
		
		/* --------------- */
		
		
		$('a#ver-catalogo').click(function(){
			$('figure#vista-02').animate({
				left: 0
			},700,'easeOutExpo')
			
			event.preventDefault();
		});
		
		$('a#ver-infografia').click(function(){
			$('figure#vista-02').animate({
				left: '100%'
			},700,'easeOutExpo')
			
			event.preventDefault();
		});
		
		
		/* ---------------- */
		
		
		$('#flipbook').turn({
			width: 900,
			height: 530,
			autoCenter: true,
			gradients: true
		});
	});


































