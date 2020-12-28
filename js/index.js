$(function() {
  $('.fairi-tail__slider').slick({
   prevArrow: '<button type="button" class="slick-btn slick-prev"> <img src="img/arrow-prev.svg" alt=""></button>',
   nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="img/arrow-next.svg" alt=""></button>',
   autoplay: true,
   responsive: [ { breakpoint: 650, settings: { arrows: false } }, ]
  });


   $('.our-trip__slider').slick({
   prevArrow: '<button type="button" class="slick-btn slick-prev"> <img src="img/arrow-prev.svg" alt=""></button>',
   nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="img/arrow-next.svg" alt=""></button>',
   autoplay: true,
   responsive: [ { breakpoint: 650, settings: { arrows: false } }, ]
  });
  $("a").on("click", function (event) {
    if($(this).attr('href').indexOf('#') != -1){ 
			event.preventDefault(); 
            let href = $(this).attr('href').replace('#', ''); 
			
			if($('#'+href).length > 0){ 
            	let tophref = $('body').find('#'+href).offset().top; 
            	$('html, body').animate({scrollTop: tophref}, 800); 
			}
    }
    
});
$('#form').validate ( {
  rules: {
    email: {
      required: true,
      email: true
    },
    name: {
      required: true,
      minlength:3
    }
  },
  messages: {
    email: {
      required: "Введите email!",
      email: "Введите корректный email!"
    },
    name: {
      required: "Введите имя!",
      minlength:"Длина имени должна быть не менее 3-х символов"
    }
  },
  highlight: function (element) {
    $(element).addClass('invalid');
                
  },
    unhighlight: function (element) {
    $(element).removeClass('invalid');
                
  },
  submitHandler: function() {
    alert("Заявка отправлена, оператор свяжется с Вами в ближайшее время.");
    $('.contacts__form-input').val("");
  }
 
});



});
    	
