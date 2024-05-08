
console.log('https://doxbin.com/user/creepier stop trying to skid');
console.log('https://doxbin.com/user/creepier stop trying to skid');
console.log('https://doxbin.com/user/creepier stop trying to skid');
console.log('https://doxbin.com/user/creepier stop trying to skid');
console.log('https://doxbin.com/user/creepier stop trying to skid');

window.oncontextmenu = function () {
  return false;
};
$(document).keydown(function (event) {
  if (event.keyCode == 123) {
    return false;
  } else {
    if (event.ctrlKey && event.shiftKey && event.keyCode == 73 || event.ctrlKey && event.shiftKey && event.keyCode == 74) {
      return false;
    }
  }
});
function audioPlay() {
  var audioElement = document.getElementById("audio");
  audioElement.volume = 0.3;
  audioElement.play();
}
function videoPlay() {
  var audioElement = document.getElementById("video");
  audioElement.play();
}
