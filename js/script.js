window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
      document.getElementById('navbar_top').style.position='fixed';
      document.getElementById('navbar_top').style.zIndex='2';
      document.getElementById('navbar_top').style.top='0px';
      document.getElementById('navbar_top').style.right='0px';
      document.getElementById('navbar_top').style.left='0px';
      // add padding top to show content behind navbar
    //   navbar_height = document.querySelector('.navbar').offsetHeight;
    //   document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').style.position='inherit';
       // remove padding top from body
    //   document.body.style.paddingTop = '0';
    } 
});

console.log('fhj')


// statistics



scroll_start = $(".statistics").offset().top;

$(window).on('scroll', function() { 
  if ($(window).scrollTop() >= $( 
    '.statistics').offset().top-300) { 
      $('.timer').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
      
          duration: 3000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
           
          }
      
        });  
        
      
      });
  }
})


// projects

$(function(){
  $('#product-grid').mixItUp();
});

$(function(){
  var $sortSelect = $('#SortSelect'),
    $container = $('#product-grid');
  
  $container.mixItUp();
  

  
  $sortSelect.on('change', function(){
  $container.mixItUp('sort', this.value);
  });
});


//back to top btn
mybutton=document.getElementById('myBtn')
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}