$(document).ready(function(){
  var regex = /^(Array\n\()[\w\W]*(\n\))$/m;
  var body = $('body').html();
  
  var foundArray = body.match(regex);
  if(!foundArray) return;
  
  var newBody = "<pre>" + foundArray[0] + "</pre>";
  $('body').html(newBody);
});