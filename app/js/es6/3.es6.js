/* global _:true */
/* jshint unused:false */
/* global AmCharts:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    initGraph();
    $('#get').click(makeArray);
  }

  function makeArray(){
    var wordArray = $('#copy').val().toLowerCase().split(' ').map(n=>n.trim()).map(n=>n.replace(/[-;,'.]/g, ''));
    histogram(wordArray);
  }

  function histogram(wordArray){
    var _wordArray = _(wordArray).chain().groupBy(_.identity).map(function (wordArray, key) {
          return {
              freq: wordArray.length,
              value: key
          };
      });

    var wordObject = _wordArray.value();
    wordObject.forEach(m=>charts.dataProvider.push(m));
    console.log(charts);
    charts.validateData();
  }

  // Chyld's code
  // function show(){
  //   let histogram = {};
  //   let doi = getDeclaration();
  //   let words = doi.split(/[^\w]/).map(w=>w.trim()).map(w=>w.toLowerCase());
  //
  //   words = _(words).compact().forEach(w=>{
  //     if (histogram[w])
  //       {histogram[w]++;}
  //     else
  //       {histogram[w] = 1;}
  //   });
  //
  //   _(histogram).forEach((value,key)=>chart.dataProvider.push({word: key, count: value}));
  //   chart.validateData();
  // }

  var charts;
  function initGraph(){
    charts = AmCharts.makeChart('chartdiv', {
      'type': 'serial',
      'theme': 'light',
      'pathToImages': 'http://www.amcharts.com/lib/3/images/',
      'titles': [{
        'text': 'Declaration of Independence Histogram',
        'size': 15
      }],
      'legend': {
          'useGraphSettings': true
        },
        'dataProvider': [],
        'valueAxes': [{
          'id':'v1',
          'minimum': 0,
          'maximum': 45,
          'axisColor': '#FF6600',
          'axisThickness': 2,
          'gridAlpha': 0,
          'axisAlpha': 1,
          'position': 'left'
        }],
        'graphs': [{
          'valueAxis': 'v1',
          'lineColor': '#FF6600',
          'bullet': 'round',
          'bulletBorderThickness': 1,
          'hideBulletsCount': 30,
          'title': 'Frequency',
          'valueField': 'freq',
          'fillAlphas': 0
        }],
        'chartCursor': {
          'cursorPosition': 'mouse'
        },
        'categoryField': 'value',
        'categoryAxis': {
          'axisColor': '#DADADA',
          'minorGridEnabled': true
        }
      });
  }


    // let [startArray, endArray, stepArray] = $('#numbers').val().split(',').map(n=>n.trim());
    // let genArray = _.range(startArray, endArray, stepArray);
    // let _genArray = _(genArray).map(x=>Math.pow(x,4)).filter(x=>x%2).map(x=>`<div class=littleSquare>${x}</div>`);
    // $('#output').append(_genArray.value());

})();


// .replace(/[-;,']/g, '')  - remove all the extra shit.
