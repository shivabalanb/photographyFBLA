const texts = ['photographer', 'traveller', 'designer', 'blogger', 'film enthusiast'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

   if(count === texts.length){
      count = 0;
   }
   currentText= texts[count];
   letter = currentText.slice(0, ++index);

   document.querySelector('.typing').textContent = letter;
   if (letter.length === currentText.length) {
      count++;
      index=0;
   }
   setTimeout(type, 400);

}());


   $("#slideshow > div:gt(0)").hide();

   setInterval(function() {
     $('#slideshow > div:first')
       .fadeOut(1000)
       .next()
       .fadeIn(1000)
       .end()
       .appendTo('#slideshow');
   },  3000);
