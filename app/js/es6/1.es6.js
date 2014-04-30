/* global _:true */
/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#getNumbers').click(getOddFourths);
  }

  function getOddFourths(){
    let [startArray, endArray, stepArray] = $('#numbers').val().split(',').map(n=>n.trim());
    let genArray = _.range(startArray, endArray, stepArray);
    let _genArray = _(genArray).map(x=>Math.pow(x,4)).filter(x=>x%2).map(x=>`<div class=littleSquare>${x}</div>`);
    $('#output').append(_genArray.value());
  }
})();
