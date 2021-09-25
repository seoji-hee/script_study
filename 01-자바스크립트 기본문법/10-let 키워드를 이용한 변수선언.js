//if(?){ true면 실행이 되고 , flase면 실행되지 않음}
//if()()
if(false){
    //변수의 역할 : 데이터 저장
    //변수 이름 정할때 데이터가 의미하는 바를 명해주면 좋다 >의미있는 영단어 권장
    //프로그래밍 = 데이터를 저장하고 꺼내오는 것
    //변수에 저장된 데이터를 출력
    //출력하고 싶은 데이터를 쓰기
    //콘솔 > 화면이 달린 장치 //log= 기억 콘솔에 기억을 남기겠다
    let money = 10000; 
    let y = 200;
    console.log(100)
    console.log("money = ")
    console.log(돈)
    console.log("money = "+money) //문자랑 숫자랑 더할때는 연결 연산자로 작동
    //변수에 데이터를 저장하고 꺼내올때 콘솔창 뿐만 아니라 브라우저에도 
  }
  if(false){
  let username = "홍길동";
  let hobby = "책읽기";
  
  console.log("username = " + username);
  console.log("hobby" + hobby);
  }
  
  if(true){
    //if문 안에서 선언한 변수는 if문 안에서만 유효하다
    let name = "홍길동"; //할당
    name = "둘리"; //재할당
  //변수는 그릇 같아서 먼저 담겨져 있던 그릇은 사라지고 새로운 변수만 남게됨
    console.log("name = " + name);
  };
  
  //console.log("name = " + name);