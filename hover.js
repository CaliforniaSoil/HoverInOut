$(document).ready(function(){
    $('img').hover(function() {
        var image = $(this).attr('anotha1');
        var temp = $(this).attr('src');
        $(this).attr('src', image);
        $(this).attr('anotha1', temp); 
    });
});