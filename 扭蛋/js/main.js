
$(document).ready(function () {

    $('button').click(function (e) { 
        e.preventDefault();
        // let A = Math.floor(Math.random()*7+1);
        // var B = console.log('.ball-'+ A );
    
        $('.ball').toggleClass('active');
        $('.ball-7').toggleClass('move');
    });
    
});
