$(function(){

    const $container = $("#slides>.slides-container");
    const $thmbs = $("#slides>.slides-topbg>.slides-pagination>li>a");//8개의 a요소
    const $btnPrev = $("#slides>.slides-previous");
    const $btnNext = $("#slides>.slides-next");
  
    const $btnPlay = $(".play");
    const $btnPause = $(".pause");
  
    let nowIdx = 0;
    let intervalKey;
  
    //썸네일활성화, 컨테이너이동 기능의 함수
    const moveFn = function(){
  
      //2.썸네일활성화
      $thmbs.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
      
      //3.컨테이너이동
      $container.stop().animate({
        left : -708*nowIdx
      },400);
  
      //카운터변경
      const cnt = "현재 " + (nowIdx+1);
      $("#slides>.slides-topbg>.page>span>strong").text(cnt);
  
    };
  
  
    //썸네일에 대한 클릭이벤트 구문 
    $thmbs.on('click', function(evt){
  
      evt.preventDefault();
      nowIdx = $thmbs.index(this);//1.인덱스추출
      moveFn();
  
    });
  
  
    //이전버튼
    $btnPrev.on('click', function(evt){
      evt.preventDefault();
  
      if(nowIdx>0){
        nowIdx--;
      }else{
        nowIdx = 7;
      }
  
      moveFn();
  
    });
  
  
    //다음버튼
    $btnNext.on('click', function(evt){
      evt.preventDefault();
  
      if(nowIdx<7){
        nowIdx++;
      }else{
        nowIdx=0;
      }
  
      moveFn();
  
    });
  
  
    //play 버튼
    $btnPlay.on('click', function(){
  
      clearInterval(intervalKey);
  
      intervalKey = setInterval(function(){
  
        //다음버튼에 클릭 이벤트 강제발생
        $btnNext.trigger('click');
  
      },2000);
  
    });
  
  
    //pause 버튼
    $btnPause.on('click', function(){
      clearInterval(intervalKey);
    });
  
    
  });