$(function(){

    const $container = $(".superband>ol");
    const $thmbs = $(".superband>ul>li>a");
    let nowIdx = 0;
  
    //썸네일에 대한 클릭이벤트 구문
    $thmbs.on('click', function(evt){
      evt.preventDefault();//a의 기본기능 작동 방지
  
      nowIdx = $thmbs.index(this);//인덱스번호 추출
  
      //활성화 표시
      //$(this).parent().addClass('on').siblings().removeClass('on');
      $thmbs.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  
      //컨테이너 이동
      $container.stop().animate({
        left : -433 * nowIdx
      },400);
    });
  
  
    //이전버튼에 대한 클릭이벤트 구문
    $(".prev").on("click", function(){
        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx=5;
        }
        });
    
    
    
    //다음버튼에 대한 클릭이벤트 구문
    $(".next").on('click', function(){
  
      /**
       * 규칙을 도출해 내서 코드로 작성해야 한다.
       * 0->1
       * 1->2
       * 2->3
       * 3->4
       * 4->5
       * 5->0
       * 
       * nowIdx값이 5보다 작으면 1 증가
       * nowIdx값이 5이면 0으로 설정
       */
  
      if(nowIdx<5){
        nowIdx++;
      }else{
        nowIdx = 0;
      }
      
      //활성화 표시
      //$(this).parent().addClass('on').siblings().removeClass('on');
      $thmbs.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  
      //컨테이너 이동
      $container.stop().animate({
        left : -433 * nowIdx
      },400);
    });
  
  
  
  });