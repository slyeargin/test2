/* global _:true */
/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(getValue);
  }

  function getValue(){
    var zip = $('#zip').val().trim();
    getWeather(zip);
    $('#zip').val('');
  }

  function getWeather(zip){
    var url = 'http://api.wunderground.com/api/259ccbf628d30983/webcams/q/'+zip+'.json?callback=?';
    $.getJSON(url, data=>{
      var camImages = [];
      console.log(data.webcams);
      // let camArray = data.webcams.forEach(x=>`<div class=littleSquare>${x}</div>`)

      data.webcams.forEach(m=>{
        console.log(m.CURRENTIMAGEURL);
        camImages.push(m.CURRENTIMAGEURL);
        });

      let camImagesDivs = camImages.map(x=>'<div class="camSquare"><img src="'+x+'"></div>');
      $('#output').append(camImagesDivs);
    });
  }

})();
