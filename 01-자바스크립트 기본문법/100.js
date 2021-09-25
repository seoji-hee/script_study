//setInterval(함수,시간)

//setInterval(function(){},1000);
let i = 1;
let intervalKey = null; //null : 지금 현재 값을 알수 없음
//10초 정도 되면 멈추고 싶을때

// setInterval(function(){
//  console.log(`i=${i}`);

//  i = i+1;
// }, 1000);

intervalKey = setInterval(function(){
  console.log(`i=${i}`);
 
  i = i+1;
  if(i > 10){
    clearInterval(intervalKey)
  };
 }, 1000);

 //교재 118~119 보면 setInterval, clearInterval 설명 있습니다.