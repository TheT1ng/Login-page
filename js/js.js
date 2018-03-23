$(document).ready(function() {

    var preloader = $('.preloader');
    var globalMail, globalPass = '';

    $('#formLogin').submit(function(event){
        event.preventDefault();
        globalMail = $('#mail').val();
        globalPass = $('#pass').val();
        preloader.fadeIn(500);
        preloader.delay(5000).fadeOut(500);
        setTimeout(function (){
           // alert(globalMail + globalPass);
            window.location.href = 'home.html'
        }, 5000)
    });
});