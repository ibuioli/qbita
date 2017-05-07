//VARS
var path = window.location.pathname;
var page = path.split("/").pop();

//SLIDE DOCS
$("#concepto").click( function() {$("#entradas").animate({marginTop: "20px"},1000);});
$("#tecno").click( function() {$("#entradas").animate({marginTop: "-500px"},1000);});
$("#investigacion").click( function() {$("#entradas").animate({marginTop: "-1020px"},1000);});
$("#geoloca").click( function() {$("#entradas").animate({marginTop: "-1550px"},1000);});
$("#metaf").click( function() {$("#entradas").animate({marginTop: "-2070px"},1000);});
$("#mapainfo").click( function() {$("#entradas").animate({marginTop: "-2590px"},1000);});
$("#3dcapa").click( function() {$("#entradas").animate({marginTop: "-3120px"},1000);});
$("#pecha").click( function() {$("#entradas").animate({marginTop: "-3640px"},1000);});
$("#pRa").click( function() {$("#entradas").animate({marginTop: "-4160px"},1000);});
$("#pRa2").click( function() {$("#entradas").animate({marginTop: "-4680px"},1000);});
$("#cRa").click( function() {$("#entradas").animate({marginTop: "-5200px"},1000);});
$("#cUx").click( function() {$("#entradas").animate({marginTop: "-5720px"},1000);});

//SLIDE DEMO Y CONTACTO
$(".link_demo").click( function() {$("#contenido2").animate({marginTop: "-530px"},600);});
$(".link_cont").click( function() {$("#contenido2").animate({marginTop: "-20px"},600);});

//SLIDE OBRAS
$(".infobra").click( function() {$("#lainfo").animate({marginLeft: "0px"},800);});
$(".datobra").click( function() {$("#lainfo").animate({marginLeft: "-415px"},800);});
$(".ubicobra").click( function() {$("#lainfo").animate({marginLeft: "-830px"},800);});

//GALERIA
var margen = 0;
if(margen == 0){
    $(".menor").fadeOut(1);
    $(".mayor").fadeIn(1);
}
$(".mayor").click( function() {
    margen = margen -900;
    $("#soporte_g").animate({marginLeft: margen+"px"},800);
    if(margen == 0){
    $(".menor").fadeOut(300);
    $(".mayor").fadeIn(300);
    }else{
    $(".menor").fadeIn(300);
    }
    if(margen < -7200){
    $(".mayor").fadeOut(300);
    }else{
    $(".mayor").fadeIn(300);
    }
});
$(".menor").click( function() {
    margen = margen +900;
    $("#soporte_g").animate({marginLeft: margen+"px"},800);
    if(margen == 0){
    $(".menor").fadeOut(300);
    $(".mayor").fadeIn(300);
    }else{
    $(".menor").fadeIn(300);
    }
    if(margen < -7200){
    $(".mayor").fadeOut(300);
    }else{
    $(".mayor").fadeIn(300);
    }
});
$(".obras ul li a").mouseenter( function() {$(".obra_d").fadeIn(300);}).mouseleave(function(){$(".obra_d").fadeOut(300);});
$(".obras a img").mouseenter( function() {$(".ver_obra").fadeIn(300);}).mouseleave(function(){$(".ver_obra").fadeOut(300);});

//FLASH
$(".intro").click( function() {
	$("#flash_2").html("");
	$("#flash").html("<iframe width='400' height='300' src='model/"+page+"'></iframe>");
    $("#imagen").fadeOut(1);
    $("#flash").fadeIn(1);
});

//PANTALLA COMPLETA
$(".b_spe").click( function() {
	$("#flash").html("");
	$("#flash_2").html("<iframe width='665' height='500' src='model/"+page+"'></iframe>");
    $("#flash").fadeOut(1);
    $("#imagen").fadeIn(1);
    $("#f_n").fadeIn(800);
});
$(".cerrar_v").click( function() {
	$("#flash").html("");
	$("#flash_2").html("");
    $("#f_n").fadeOut(600);
});
$(".f_n").click( function() {
	$("#flash").html("");
	$("#flash_2").html("");
    $("#f_n").fadeOut(600);
});

//SlIDE DEMO HOME
$(".demobutton").click( function() {
    $("#demo_home").animate({right: "0"},600);
});
$("#con").click( function() {
    $("#demo_home").animate({right: "-440px"},600);
});

//HOME EFECTO
$("#museo").mouseenter( function() {
    $("#cubo01").fadeOut(300);
    $("#cubo02").fadeIn(300);
    $("#cubo03").fadeOut(300);
    $("#cubo04").fadeOut(300);
    $("#cubo05").fadeOut(300);
    $("#m_gal").fadeIn(300);
    $("#demo_home").animate({right: "-440px"},600);
}).mouseleave(function(){
    $("#cubo02").fadeOut(300);
    $("#cubo01").fadeIn(300);
    $("#m_gal").fadeOut(300);
});
$("#obras").mouseenter( function() {
    $("#cubo01").fadeOut(300);
    $("#cubo02").fadeOut(300);
    $("#cubo03").fadeIn(300);
    $("#cubo04").fadeOut(300);
    $("#cubo05").fadeOut(300);
    $("#o_dat").fadeIn(300);
    $("#demo_home").animate({right: "-440px"},600);
}).mouseleave(function(){
    $("#cubo03").fadeOut(300);
    $("#cubo01").fadeIn(300);
    $("#o_dat").fadeOut(300);
});
$("#espacio").mouseenter( function() {
    $("#cubo01").fadeOut(300);
    $("#cubo02").fadeOut(300);
    $("#cubo03").fadeOut(300);
    $("#cubo04").fadeIn(300);
    $("#cubo05").fadeOut(300);
    $("#e_map").fadeIn(300);
    $("#demo_home").animate({right: "-440px"},600);
}).mouseleave(function(){
    $("#cubo04").fadeOut(300);
    $("#cubo01").fadeIn(300);
    $("#e_map").fadeOut(300);
});
$("#realidad").mouseenter( function() {
    $("#cubo01").fadeOut(300);
    $("#cubo02").fadeOut(300);
    $("#cubo03").fadeOut(300);
    $("#cubo04").fadeOut(300);
    $("#cubo05").fadeIn(300);
    $("#r_pro").fadeIn(300);
    $("#demo_home").animate({right: "-440px"},600);
}).mouseleave(function(){
    $("#cubo05").fadeOut(300);
    $("#cubo01").fadeIn(300);
    $("#r_pro").fadeOut(300);
});

//VALIDAR FORMULARIO
$("#form_contacto").validate();