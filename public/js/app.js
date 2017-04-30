$(document).ready(function(){

// jQuery/Ajax GET files from json file.----------------------------------Start
  $.ajax({
    url:'./featured-videos.json',
    dataType:'json',
    cache:'false',
  })
  .done(function(data){
    $.each(data, function(id, obj){
      $.each(obj, function(index,name){
        if(obj[index].fvID == 1 || obj[index].fvID <=10){
          $('.featured-videos-container1').append('<div class="vids">' +
          '<a href="#">' + '<img class="vidImg" src=' + obj[index].image + '>' +   '<span class="time">'+ obj[index].time +'</span>' + '</a>' +
          '<h6>' + obj[index].title + '</h6>' +
          '<p>' + obj[index].description + '</p>' +
          '<div class="detail">' +
            '<div class="detailLeft">' +
              '<a href="#">by ' + '<span class="author">' + obj[index].author + '</span>' + '</a>' +
              '<span class="abbr">' + obj[index].abbr + '</span>'+
              '<span class="date">' + obj[index].date + '</span>' +
            '</div>' +
            '<span class="views">' + obj[index].views + '<br>'+ '<span class="viewsWord">VIEWS</span>' + '</span>'+
          '</div>' +
          '</div>');
        }
        else if (obj[index].fvID >= 11 && obj[index].fvID <=20) {
          $('.featured-videos-container2').append('<div class="vids">' +
          '<a href="#">' + '<img class="vidImg" src=' + obj[index].image + '>' + '<span class="time">'+ obj[index].time +'</span>' + '</a>' +
          '<h6>' + obj[index].title + '</h6>' +
          '<p>' + obj[index].description + '</p>' +
          '<div class="detail">' +
            '<div class="detailLeft">' +
              '<a href="#">by ' + '<span class="author">' + obj[index].author + '</span>' + '</a>' +
              '<span class="abbr">' + obj[index].abbr + '</span>'+
              '<span class="date">' + obj[index].date + '</span>' +
            '</div>' +
            '<span class="views">' + obj[index].views + '<br>'+ '<span class="viewsWord">VIEWS</span>' + '</span>'+
          '</div>' +
          '</div>');
        }
        else if (obj[index].fvID >=21 && obj[index].fvID  <=30) {
          $('.featured-videos-container3').append('<div class="vids">' +
          '<a href="#">' + '<img class="vidImg" src=' + obj[index].image + '>' + '<span class="time">'+ obj[index].time +'</span>' + '</a>' +
          '<h6>' + obj[index].title + '</h6>' +
          '<p>' + obj[index].description + '</p>' +
          '<div class="detail">' +
            '<div class="detailLeft">' +
              '<a href="#">by ' + '<span class="author">' + obj[index].author + '</span>' + '</a>' +
              '<span class="abbr">' + obj[index].abbr + '</span>'+
              '<span class="date">' + obj[index].date + '</span>' +
            '</div>' +
            '<span class="views">' + obj[index].views + '<br>'+ '<span class="viewsWord">VIEWS</span>' + '</span>'+
          '</div>' +
          '</div>');
        }
      });
    });
  });
// jQuery/Ajax GET files from json file.----------------------------------End

// Jquey/ Videos Carousel Event -----------------------------------------Start
    var activeState = 0;
    if (activeState == 0){
      $('.btnArrowLeft').css('opacity',0);
    }
    // Left button Click Event ------------------------------------ Start
    $('.left').click(function(){
      activeState -= -1200;
      $('.featured-videos-subContainer').animate({left:activeState + "px"},6000);
        if(activeState == -1200){
          $('.rightarrow').text("10");
          $('.btnArrowRight').css('opacity', 100);
          $('.leftarrow').text("10");
        }
        else if (activeState == 0) {
          $('.rightarrow').text("20");
          $('.btnArrowLeft').css('opacity', 0);
          $('.leftarrow').text("0");
        }
    });
    // Left button Click Event ------------------------------------ End

    // Right button Click Event ------------------------------------ Start
    $('.right').click(function(){
       activeState += -1200;
       $('.featured-videos-subContainer').animate({left: activeState + "px"},6000);
        if(activeState == -1200){
          $('.leftarrow').text("10");
          $('.btnArrowLeft').css('opacity',100);
          $('.rightarrow').text("10");
        }
        else if (activeState == -2400) {
          $('.leftarrow').text("20");
          $('.btnArrowLeft').css('opacity',100);
          $('.btnArrowRight').css('opacity',0);
          $('.rightarrow').text("0");
        }
    });
    // Right button Click Event ------------------------------------ End


  // hover effect ------------------------------------Start
  $(document).ready(function(){
    $('.vidImg').hover(function(){
      $(this).parents('.vids').toggleClass("imgHover");
    });
  });
  // hover effect ------------------------------------End
});
