(function () {
  var textbox = document.getElementsByTagName('textarea')[0];
  textbox.removeAttribute("maxlength");
  var msg = prompt("Type your message here");
  msg += " ";
  var repeat = prompt("How many times you want to repeat", "Type number less than a million ");
  textbox.value = msg.repeat(repeat);
})();
