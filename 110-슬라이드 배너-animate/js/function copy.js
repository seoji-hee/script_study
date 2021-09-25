/*
	알고리즘 == 로직 == 레시피
	
	1. 클릭한 인디케이터(a)가 몇번째 요소인지를 나타내는 index 번호를 추출
	
	2. 그 index 번호에 해당하는 a 요소의 부모에 .on 클래스를 추가한다.
	
	3. 그 index 번호에 해당하는 a 요소의 부모의 형제에 해당하는 다른 li에게서 .on 클래스를 제거한다.
	
	4. index 번호에 매칭되는 슬라이드가 보일 수 있도록 .slides-container를 이동한다.
*/

$(function(){
	//인디케이터에 대한 클릭이벤트 구문
	const $indicators = $(".slides-pagination > li >a");

	$indicators.on('click', function(evt){
		evt.preventDefault();


	//이번에 클릭한 a의 인덱스 추출
		const nowIdx = $indicators.index(this);

	//인디케이터 활성화 표시
		$(this).parent().addClass('on').siblings().removeClass("on");

	//컨테이너 이동
	$(".slides-container").animate({
		left: -665*nowIdx
		}, 1000);
	});
});


















