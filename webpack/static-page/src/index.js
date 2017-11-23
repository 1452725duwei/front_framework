document.body.style.background = 'red';
var $ = require('jquery');
$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});