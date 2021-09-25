/*
	알고리즘 == 로직 == 레시피
	
	1. 클릭한 인디케이터(a)가 몇번째 요소인지를 나타내는 index 번호를 추출
	
	2. 그 index 번호에 해당하는 a 요소의 부모에 .on 클래스를 추가한다.
	
	3. 그 index 번호에 해당하는 a 요소의 부모의 형제에 해당하는 다른 li에게서 .on 클래스를 제거한다.
	
	4. index 번호에 매칭되는 슬라이드가 보일 수 있도록 .slides-container를 이동한다.
*/

document.addEventListener("DOMContentLoaded",function(){
	const $indicators = document.querySelectorAll('.slides-pagination a');

	let $container = document.querySelector('.slides-container');
	let nowIdx = 0;
	let oldIdx = 0;


	$indicators.forEach(function(item, idx){
		item.addEventListener('click', function(evt){
			evt.preventDefault();

			oldIdx = nowIdx;
			nowIdx = idx;

	//this의 개념 evt의 타켓 currentTarget
	const $parent = evt.currentTarget.parentElement;

	$parent.classList.add('on');
	$indicators[oldIdx].parentElement.classList.remove('on');

	//컨테이너 이동
	$container.style.setProperty('margin-left', -(665*nowIdx)+"px");
		});
	});
});




















