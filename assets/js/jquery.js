// jQuery


$(function(){
  // nav
  $('.fa').on('click', function() {
    $(this).next().stop(true,false).slideToggle();
  });
  // nav fin

  // code showing
  $('.btn').on('click', function() {
    $('.code').stop(true, true)
    .end()
    $(this).next('.code')
    .slideToggle()
    .siblings('.code')
    .slideUp()
    .end()
    .parents('.javascript')//section => container
    .siblings()
    .find('.code')//
    .slideUp();
  });

  //sample box for animation
  $('#samplebtn').click(function() {
    $("#samplebox").animate({width: "300px"});
  });
  // sample toggle
  $('#samplebtn_02').click(function() {
    $('#sampleText').toggle("slow");
  });

  // plug-in
    var images = [
      "squareFlash",
      "vortex",
      "bouncingBalls",
      "shootingLines",
      "simpleGradient",
      "starfield",
      "layeredTriangles",
      "cornerSpikes",
      "floatingBoxes"
  ];
  var randImg = images[Math.floor(Math.random() * images.length)];
  console.log(randImg);
      $("#plugin").quietflow({
        theme          : randImg,
        specificColors : ["rgba(46, 204, 113, .5)", 
                          "rgba(52, 152, 219, .5)", 
                          "rgba(231, 76, 60, .5)", 
                          "rgba(155, 89, 182, .5)", 
                          "rgba(241, 196, 15, .5)"],
        boxCount       : 500,
        backgroundCol  : "black"
      });
});//jQuery 