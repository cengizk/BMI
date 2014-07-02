$("document").ready(function(){

$("body").append("<b>!BMI Rechner!</b><br>");
$("body").append("Größe in m:<input type='text' id='groese'><br>");
$("body").append("Gewicht in kg:<input type='text' id='gewicht'><br>");
$("body").append("<input type='button' id='knopf' value='Berechne BMI'><br>");

$("#knopf").click(function(){
  var groesse=$("#groese").val();
  var gewicht=$("#gewicht").val();
  var bmi=0;
  var g=groesse*groesse;
  
  bmi=gewicht/g;
 $("body").append("Ihr BMI beträgt "+bmi+"");
});
});
 
  