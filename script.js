   let pizzaNumber;

   // function getRandom() {
   //     return Math.ceil(Math.random(pizzaNumber) * 4);
   // }

   $(".question").click(function() {
function getRandom() {
       return Math.ceil(Math.random(pizzaNumber) * 4);
   }
       $(".answer-one").text(`The random number is... ${pizzaNumber}`);
   });