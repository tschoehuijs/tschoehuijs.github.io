var intervalID = setInterval(function(){
   $('.refreshClass').each(function(){
      $(this).load(this.href);
   })
}, 900);
