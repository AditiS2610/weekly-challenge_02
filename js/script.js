$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.slider').slider({full_width:true});
    $('.parallax').parallax();
    $('.myreviews').carousel({
        numVisible: 7,
        shift: 55,
        padding: 55,

    });
    $(".modal").modal();
    $(".carousel.carousel-slider.myslider").carousel({
        fullWidth: true,
        indicators: true,
      });
})


function toggleModal() {
    var instance = M.Modal.getInstance($("#modal3"));
    instance.open();
}