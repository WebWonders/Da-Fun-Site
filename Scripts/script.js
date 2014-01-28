//jQuery stuff
$(document).ready(function() {
   //bouncies
   $('.bouncies').mouseenter(function() {
       $(this).animate({
           height: '+=50px'
       });
   });
   $('.bouncies').mouseleave(function() {
       $(this).animate({
           height: '-=50px'
       }); 
   });
   $('.bouncies').click(function() {
       $(this).toggle(1000);
   });
   //button of dissapearance
   $('#button1').click(function(){
       $('#p2dissapear1').fadeOut('slow',0);
       $('#button1').fadeOut('slow',0);
   });
});
