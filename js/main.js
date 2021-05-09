document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, options);
  });


  $(document).ready(function(){
          
    $("a").on('click', function(event) {

      if (this.hash !== "") {
        
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });