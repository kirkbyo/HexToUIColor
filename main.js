// Gets users inputs
// Checks if valid hex
// Converts to UIColor Format
// Displays conversation in output element

var hexInput = document.getElementById("inputField")
var preview = document.getElementById("preview");
var output = document.getElementById("output");
var convert = document.getElementById("convert");


function hexToUIColor(hex) {
   var rgb = hexToRgb(hex);
   var red = rgb[0] / 255.0;
   var green = rgb[1] / 255.0;
   var blue = rgb[2] / 255.0;

   var output = "UIColor(red: " + red.toFixed(3) + ", green:" + green.toFixed(3) + ", blue:" +  blue.toFixed(3) + ", alpha:" + 1.0 + ")";
   return output;
}

convert.onclick = function() {
   output.innerHTML = hexToUIColor(hexInput.value);
   preview.style.backgroundColor = hexInput.value
}
