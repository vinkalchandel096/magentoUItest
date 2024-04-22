require(['jquery', 'jquery/ui'], function($){ 
   $(document).ready(function(){
      $('.block-search').click(function () {
         $('.minisearch').toggleClass('active') ;
      });
      $('.nav-toggle').click(function () {
         $('.navigation').addClass('active') ;

      });
      $('.navigation.active').click(function(){
         $(this).removeClass('active');
      })
});
      
});
