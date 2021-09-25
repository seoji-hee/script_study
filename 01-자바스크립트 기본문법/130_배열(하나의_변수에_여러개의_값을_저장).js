//배열과 객체는 약간의 차이점이 있다
//데이터를 10개 저장하려면 객체 말고 변수 열개 선언해야 했었다
//참조변수는 객체, 함수 ,배열 3가지가 있다

//배열 -day라고 하는 배열변수에 저장되는 값은 해당 배열을 가리키는 주소값, 또는 참조값이다 > 변수는 하나인데 값을 여러개 저장할수 있다
//배열변수를 통한 데이터 저장
const day = ['월','화','수','목','금','토']

//배열 > 값을 꺼내 올때는 위치값을 의미하는 index값을 의미한다
//console.log(배열 변수이름[자리값])

console.log(day[0]) //월

console.log(day[1], day[2] , day[3])

//예제)배열의 주소값을 복사
let whatDay = day;
console.log(whatDay[0])
console.log(whatDay[3])

//예제)배열의 데이터 값을 변경 >객체하고 같음
day[2] = '수요일이랑께'

//예제)배열의 갯수를 셀때,길이를 출력 
//배열명.length

day[6] = "일요일이라고 추가할게"

//배열의 끝에 새로운 데이터를 추가하는 .push()메소드 
day.push("공휴일")
console.log(`day배열의 길이는 ${day.length}`)
console.log(day) //>배열이름만 쓰면 배열의 전체값이 나오게 된다

//배열의 모든 요소를 연결해 하나의 문자열로 만드는 .join('구분자')

let day_str = day.join();
day_str = day.join('/');
console.log(`day_str = ${day_str}`)