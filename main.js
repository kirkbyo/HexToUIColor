

var hexInput = document.getElementById("inputField")
var preview = document.getElementById("preview");
var output = document.getElementById("output");
var convert = document.getElementById("convert");

function isHex(x) {
   var hexed = x.split("");
   if (hexed[0] == "#") {
      hexed.shift()
      if (hexed.length == 6) {
         return true;
      } else {
         return false;
      }
   } else if (hexed.length = 6) {
      return true;
   } else {
      return false
   }
}

// Adds a hash (#) to the hex
function hashHex(hex) {
   var hexed = hex.split("");
   if (hexed[0] != "#") {
      hexed.reverse();
      hexed.push("#");
      hexed.reverse();
      return hexed.join("");
   } else {
      swal("Oops...", "Please enter a valid hex code!", "error");
   }
}

function isHashed(x) {
   var hexed = x.split("");
   if (hexed[0] != "#" ) {
      return true;
   } else {
      return false;
   }
}

function hexToUIColor(hex) {
   var rgb = hexToRgb(hex);
   var red = rgb[0] / 255.0;
   var green = rgb[1] / 255.0;
   var blue = rgb[2] / 255.0;

   var output = "UIColor(red: " + red.toFixed(3) + ", green:" + green.toFixed(3) + ", blue:" +  blue.toFixed(3) + ", alpha:" + 1.0 + ")";
   return output;
}

convert.onclick = function() {
   if (isHex(hexInput.value) == true) {
      output.innerHTML = hexToUIColor(hexInput.value);
      if (isHashed(hexInput.value) == true) {
         preview.style.backgroundColor = hashHex(hexInput.value);
      } else if (isHashed(hexInput.value) == false) {
         preview.style.backgroundColor = hexInput.value
      } else {
         swal("Oops...", "Please enter a valid hex code!", "error");
      }
   } else {
      swal("Oops...", "Please enter a valid hex code!", "error");
   }
}
