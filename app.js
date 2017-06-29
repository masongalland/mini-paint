$('document').ready(function(){

var box = $(".box");
var reset = $('#reset');
var color = 'white';
var colors = 'white red blue green yellow white'

var flag = false;
box.on('mousedown', function(){
    flag = true;

    box.on('mouseover', function(){
        if(flag){
        $(this).addClass(color);
        }
    })
});

box.on('mouseup', function(){
    flag = false;
})

box.on('dblclick', function() {
    $(this).removeClass(color);
});

reset.on('click', function(){
    box.removeClass(colors);
});

$('#red').on('click', function() {
    color = 'red';
});

$('#blue').on('click', function() {
    color = 'blue';
})

$('#green').on('click', function() {
    color = 'green';
})

$('#yellow').on('click', function() {
    color = 'yellow';
})

$('#white').on('click', function() {
color = 'white';
})







});