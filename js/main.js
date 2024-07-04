$(document).on("click", aboutArrow, function(e) {
    e.preventDefault();
    let id  = $(this).attr('href');
    let top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 1000); // плавно переходим к блоку
});