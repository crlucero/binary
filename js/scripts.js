var binaryToDec = function(inputNumber) {
   binaryArray = []

  for (x = inputNumber; x > 0; x = Math.floor(x / 2)) {
  binaryArray.push(x % 2);
 }

 var reversedBinary = binaryArray.reverse().join("");

 return reversedBinary;
};

$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var inputNumber = $("#DecimalNumber").val();
    $("#output").text(binaryToDec(inputNumber));

  });
});
