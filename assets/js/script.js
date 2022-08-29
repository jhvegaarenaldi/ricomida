//Jquery FIle
//alert("entre al javascript");

$(document).ready(function()
{

    //Activar memsaje cuando se realice Click en boton Enviar Correo
    $('#enviarCorreo').click(function() {
        alert("El correo fue enviado correctamente...");
      });


 //     $('#ingredientes').click(function() {
 //       alert("Entre a Ingredientes click...");
  //    });

 //     $('#preparacion').dblclick(function() {
  //     alert("Entre a Preparacion click...");
  //  });

    // Cambiar de color el texto cuando se haga doble Click en Ingredientes
    $('#ingredientes').dblclick(
        function(){ $(this).addClass('text-danger')
   //     function(){ $(this).removeClass('text-danger');
    });

    // Cambiar de color el texto cuando se haga doble Click en Preparacion
    $('#preparacion').dblclick(
        function(){ $(this).addClass('text-danger')
  //      function(){ $(this).removeClass('text-danger');
    });

    $( "#preparacion" ).hover(function() {$( this ).addClass( "text-danger" );}, function() {$( this ).removeClass( "text-danger" );})
    $( "#ingredientes" ).hover(function() {$( this ).addClass( "text-danger" );}, function() {$( this ).removeClass( "text-danger" );})

   // $( "preparacion" ).off( "mouseenter mouseleave" );

   //$( "#preparacion").on( "mouseenter mouseleave", handlerInOut );

   // $('#preparacion').hover(
   //      function(){ $(this).addClass('text-danger')

   //  });

//     $('.card-text').click(function() {
//        alert("Entre a Card Text ..");
//    });


    // implementar Toggle.................
    $('.card-title').click(function(){

        $('.card').toggle().delay(500).show(500);
     });


}); //cierre del $(docuemnt)
