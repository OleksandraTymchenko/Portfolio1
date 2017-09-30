$(function () {
    console.log('ham');
    $('._hamburger').click(function () {
        $('._nav').slideToggle();
    });
});
console.log('module1 works')

var a= 200;
console.log(a);

	
console.log('module2 works')
console.log('module3 works')
//  show and hide button under projects' images
$(document).ready(function(){
    $("._project-1").mouseenter(function(){
        $("._prj-1").toggle();
    });

     $("._project-2").mouseenter(function(){
        $("._prj-2").toggle();
    });
    
     $("._project-3").mouseenter(function(){
        $("._prj-3").toggle();
    });

    $("._project-4").mouseenter(function(){
        $("._prj-4").toggle();
    });
    
     $("._project-5").mouseenter(function(){
        $("._prj-5").toggle();
    });

     $("._project-6").mouseenter(function(){
        $("._prj-6").toggle();
    });    
});

// onclick button link to project-1 website 
$('._prj-1').click(function () {
    location.href = "http://plnkr.co/edit/P7mqgVofkM5AnOkW1tiD?p=preview";
});

// onclick button link to project-2 website
$('._prj-2').click(function () {
    location.href = "http://localhost:3000";
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
  
// onclick button link to project-4 website 
$('._prj-4').click(function () {
    location.href = "http://plnkr.co/edit/P7mqgVofkM5AnOkW1tiD?p=preview";
});

// onclick button link to project-5 website 
$('._prj-5').click(function () {
    location.href = "http://plnkr.co/edit/P7mqgVofkM5AnOkW1tiD?p=preview";
});

// onclick button link to project-6 website 
$('._prj-6').click(function () {
    location.href = "http://plnkr.co/edit/P7mqgVofkM5AnOkW1tiD?p=preview";
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbWJ1cmdlci5qcyIsIm1vZHVsZTEuanMiLCJtb2R1bGUyLmpzIiwibW9kdWxlMy5qcyIsIm15UHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdoYW0nKTtcclxuICAgICQoJy5faGFtYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5fbmF2Jykuc2xpZGVUb2dnbGUoKTtcclxuICAgIH0pO1xyXG59KTsiLCJjb25zb2xlLmxvZygnbW9kdWxlMSB3b3JrcycpXHJcblxyXG52YXIgYT0gMjAwO1xyXG5jb25zb2xlLmxvZyhhKTtcclxuXHJcblx0IiwiY29uc29sZS5sb2coJ21vZHVsZTIgd29ya3MnKSIsImNvbnNvbGUubG9nKCdtb2R1bGUzIHdvcmtzJykiLCIvLyAgc2hvdyBhbmQgaGlkZSBidXR0b24gdW5kZXIgcHJvamVjdHMnIGltYWdlc1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgJChcIi5fcHJvamVjdC0xXCIpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiLl9wcmotMVwiKS50b2dnbGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAkKFwiLl9wcm9qZWN0LTJcIikubW91c2VlbnRlcihmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCIuX3Byai0yXCIpLnRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICAkKFwiLl9wcm9qZWN0LTNcIikubW91c2VlbnRlcihmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCIuX3Byai0zXCIpLnRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5fcHJvamVjdC00XCIpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiLl9wcmotNFwiKS50b2dnbGUoKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAgJChcIi5fcHJvamVjdC01XCIpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiLl9wcmotNVwiKS50b2dnbGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICAkKFwiLl9wcm9qZWN0LTZcIikubW91c2VlbnRlcihmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCIuX3Byai02XCIpLnRvZ2dsZSgpO1xyXG4gICAgfSk7ICAgIFxyXG59KTtcclxuXHJcbi8vIG9uY2xpY2sgYnV0dG9uIGxpbmsgdG8gcHJvamVjdC0xIHdlYnNpdGUgXHJcbiQoJy5fcHJqLTEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBsb2NhdGlvbi5ocmVmID0gXCJodHRwOi8vcGxua3IuY28vZWRpdC9QN21xZ1ZvZmtNNUFuT2tXMXRpRD9wPXByZXZpZXdcIjtcclxufSk7XHJcblxyXG4vLyBvbmNsaWNrIGJ1dHRvbiBsaW5rIHRvIHByb2plY3QtMiB3ZWJzaXRlXHJcbiQoJy5fcHJqLTInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBsb2NhdGlvbi5ocmVmID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxufSk7XHJcblxyXG4vLyBvbmNsaWNrIGJ1dHRvbiBsaW5rIHRvIHByb2plY3QtMyB3ZWJzaXRlIFxyXG4kKCcuX3Byai0zJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgbG9jYXRpb24uaHJlZiA9IFwiaHR0cDovL3BsbmtyLmNvL2VkaXQvUDdtcWdWb2ZrTTVBbk9rVzF0aUQ/cD1wcmV2aWV3XCI7XHJcbn0pO1xyXG5cclxuLy8gb25jbGljayBidXR0b24gTU9SRSBQUk9KRUNUUyBzaG93IGFuZCBoaWRlIG1vcmUgcHJvamVjdHNcclxuJCgnLl9wcmonKS5jbGljayAoZnVuY3Rpb24oKXtcclxuICAgICAkKCcuX3Byb2plY3QtNCcpLnRvZ2dsZSgpO1xyXG4gICAgICQoJy5fcHJvamVjdC01JykudG9nZ2xlKCk7XHJcbiAgICAgJCgnLl9wcm9qZWN0LTYnKS50b2dnbGUoKTtcclxufSk7XHJcblxyXG4vLyBvbmNsaWNrIGhpZGUgdXNlbGVzcyBidXR0b24gXHJcbiQoJy5fcHJqJykuY2xpY2sgKGZ1bmN0aW9uKCl7XHJcbiAgICAgJCgnLl9wcmotNCcpLmhpZGUoKTtcclxuICAgICAkKCcuX3Byai01JykuaGlkZSgpO1xyXG4gICAgICQoJy5fcHJqLTYnKS5oaWRlKCk7XHJcbn0pO1xyXG4gIFxyXG4vLyBvbmNsaWNrIGJ1dHRvbiBsaW5rIHRvIHByb2plY3QtNCB3ZWJzaXRlIFxyXG4kKCcuX3Byai00JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgbG9jYXRpb24uaHJlZiA9IFwiaHR0cDovL3BsbmtyLmNvL2VkaXQvUDdtcWdWb2ZrTTVBbk9rVzF0aUQ/cD1wcmV2aWV3XCI7XHJcbn0pO1xyXG5cclxuLy8gb25jbGljayBidXR0b24gbGluayB0byBwcm9qZWN0LTUgd2Vic2l0ZSBcclxuJCgnLl9wcmotNScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGxvY2F0aW9uLmhyZWYgPSBcImh0dHA6Ly9wbG5rci5jby9lZGl0L1A3bXFnVm9ma001QW5Pa1cxdGlEP3A9cHJldmlld1wiO1xyXG59KTtcclxuXHJcbi8vIG9uY2xpY2sgYnV0dG9uIGxpbmsgdG8gcHJvamVjdC02IHdlYnNpdGUgXHJcbiQoJy5fcHJqLTYnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBsb2NhdGlvbi5ocmVmID0gXCJodHRwOi8vcGxua3IuY28vZWRpdC9QN21xZ1ZvZmtNNUFuT2tXMXRpRD9wPXByZXZpZXdcIjtcclxufSk7Il19
