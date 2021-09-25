const $ = function(query){
    /* 매개 변수 querty로 넘어 오는 값은
    ㅣㅑ>ㅁ
    .slides
    #screen*/
    if(query[0]=='#'){
    
        return document.getElementById(query.slice(1)); //인데그 다음에 나오는 값들을 리턴한다 > #slice에서 #을 제외한 다음 글자를 리턴
        
    }else if(query[0]=='.'){
     return document.querySelector(query);
    }else{
     return document.querySelectorAll(query);
    }
    
    };
    
    $();
    //query = 질의 하다  : 이런 녀석들을 선택해줘
    
    
    //태그의 속성을 제어하는 함수 
    const attr = function(obj, attrName, atrVal){
        if(atrVal==undefined){
    return obj.getAttribute(attrName);
        }else{
            obj.setAttribute(attrName, attrVal);
        }
    };