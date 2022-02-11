$(function () {
    $('.planButton').prevAll().hide();
    $('.planButton').click(function () {
        if ($(this).prevAll().is(':hidden')) {
            $(this).prevAll().slideDown();
            $(this).text('Close').addClass('close');
        } else {
            $(this).prevAll().slideUp();
            $(this).text('more↓').removeClass('close');
        }
    });
});