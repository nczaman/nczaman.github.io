var call = 1;
var all = 4;
function s(i) {
    var Image = document.getElementsByClassName('slide_img')[0];
    call = call + i;
    if (call > all) {
            call = 1;
        }
    if (call < 1) {
            call = all;
        }
    Image.src = "images/sliders/slider" + call + ".png";
}
window.setInterval(function () {
    var Image = document.getElementsByClassName('slide_img')[0];
    call = call + 1;
    if (call > all) {
            call = 1;
        }
    if (call < 1) {
            call = all;
        }
    Image.src = "images/sliders/slider" + call + ".png";
}, 8000);