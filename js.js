// const images = [
//   'assets/Alex01.jpg',
//   'assets/Alex02.jpg',
//   'assets/Alex03.jpg',
//   'assets/Alex04.jpg',
//   'assets/Alex05.jpg',
//   'assets/Alex06.jpg',
//   'assets/Alex07.jpg',
//   'assets/Alex08.jpg',
//   'assets/Alex09.jpg',
//   'assets/Alex010.jpg',
//   'assets/Alex011.jpg',
//   'assets/Alex012.jpg',
//   'assets/Alex013.jpg',
//   'assets/Alex014.jpg',
//   'assets/Alex015.jpg',
//   'assets/Alex016.jpg',
//   'assets/Alex017.jpg',
//   'assets/Alex018.jpg',
//   'assets/Alex019.jpg',
//   'assets/Alex020.jpg',
//   'assets/Alex021.jpg',
//   'assets/Alex022.jpg',
//   'assets/Alex023.jpg',
//   'assets/Alex024.jpg',
//   'assets/Alex025.jpg',
//   'assets/Alex026.jpg',
//   'assets/Alex027.jpg',
//   'assets/Alex028.jpg',
//   'assets/Alex029.jpg',
//   'assets/Alex030.jpg',
// ],


var TOTAL_IMAGES = 30;
var IMAGE_INDEX = 1;

$(document).ready(function () {


  $("body").click(function () {
    IMAGE_INDEX++;
    if (IMAGE_INDEX > TOTAL_IMAGES) {
      IMAGE_INDEX = 1;
    }
    $("#theimage").attr("src", "assets/Alex0" + IMAGE_INDEX + ".jpg");
  });

});



$(window).resize(function () { responsive_ui(); });
$(window).load(function () { responsive_ui(); });
$(document).ready(function () { responsive_ui(); });
function responsive_ui() {

  $("#theimage_container").css("height", $("body").height() + "px");

  $(".centerxy").each(function () { $(this).center(1, 1); });
  $(".centerx").each(function () { $(this).center(1, 0); });
  $(".centery").each(function () { $(this).center(0, 1); });

}
$.fn.center = function (x, y) {
  if (x == 1) { this.css("left", Math.max(0, (($(this).parent().width() - $(this).outerWidth()) / 2)) + "px"); }
  if (y == 1) { this.css("top", Math.max(0, (($(this).parent().height() - $(this).outerHeight()) / 2)) + "px"); }
  return this;
};