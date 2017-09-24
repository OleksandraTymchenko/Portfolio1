//  show and hide button under project-1 image
$(document).ready(function(){
    $("._project-1").mouseenter(function(){
        $("._prj-1").toggle();
    });
    
});

// onclick button link to project-1 website 
$('._prj-1').click(function () {
    location.href = "http://plnkr.co/edit/P7mqgVofkM5AnOkW1tiD?p=preview";
});

// show and hide button under project-2 image
$(document).ready(function(){
    $("._project-2").mouseenter(function(){
        $("._prj-2").toggle();
    });
});

// onclick button link to project-2 website
$('._prj-2').click(function () {
    location.href = "http://localhost:3000";
});

// show and hide button under project-3 image
$(document).ready(function(){
    $("._project-3").mouseenter(function(){
        $("._prj-3").toggle();
    });
});

// onclick button link to project-3 website 
$('._prj-3').click(function () {
    location.href = "http://plnkr.co/edit/P7mqgVofkM5AnOkW1tiD?p=preview";
});


// onclick button MORE PROJECTS show and hide more projects
$('._prj').click (function(){
     $('._project-4').toggle();
     $('._project-5').toggle();
     $('._project-6').toggle();
});

// onclick hide useless button 
$('._prj').click (function(){
     $('._prj-4').hide();
     $('._prj-5').hide();
     $('._prj-6').hide();
});


// show and hide button under project-4 image
$(document).ready(function(){
    $("._project-4").mouseenter(function(){
        $("._prj-4").toggle();
    });
    
});    
// onclick button link to project-4 website 
$('._prj-4').click(function () {
    location.href = "http://plnkr.co/edit/P7mqgVofkM5AnOkW1tiD?p=preview";
});


// show and hide button under project-5 image
$(document).ready(function(){
    $("._project-5").mouseenter(function(){
        $("._prj-5").toggle();
    });
});
// onclick button link to project-5 website 
$('._prj-5').click(function () {
    location.href = "http://plnkr.co/edit/P7mqgVofkM5AnOkW1tiD?p=preview";
});


// show and hide button under project-6 image
$(document).ready(function(){
    $("._project-6").mouseenter(function(){
        $("._prj-6").toggle();
    });
});
// onclick button link to project-6 website 
$('._prj-6').click(function () {
    location.href = "http://plnkr.co/edit/P7mqgVofkM5AnOkW1tiD?p=preview";
});