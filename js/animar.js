//animación aparición de pagina

$(function() {
    
    $("body").hide() .fadeIn (2000)
    $(".logo-box").hide() .fadeIn(3000) 
    $(".lista").hide() .fadeIn(3000)
    $("#form-box1").hide()
    $("#contacto").click(function(){
        $("#form-box1").show(1000) 
    });
    $("#boton2").click(function(){
        $("#form-box1").hide(1000) 
    });

    $("#carrito-box1").hide()
    $("#catalogo").click(function(){
        $("#carrito-box1").fadeIn(1000)
    });
    $("#boton3").click(function(){
        $("#carrito-box1").fadeOut(1000) 
    });

    
          
});


