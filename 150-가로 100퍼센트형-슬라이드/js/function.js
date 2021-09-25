$(function(){
let $btn = $('.pagination > li > a');
let nowIdx = 0;
$btn.on('click', function(evt){
evt.preventDefault();

nowIdx = $btn.index(this);
$btn.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');


});
});












