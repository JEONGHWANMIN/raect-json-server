# React Json-Server CRUD NoteApp

### json-server excute `npx json-server ./data.json --port 4000`

<hr>
React , json-server를 이용한 CRUD 구현 <br>
styled compoents  -> js in css 방식사용 <br>
styled reset 사용 <br>
form data 형식 리팩토링 -> 많은 useState를 하나로 묶어서 처리 <br>
처리방식 : https://ghksals0904.tistory.com/98?category=1006712<br>
ckeditor5 사용해서 <"textarea"> 가 아닌 좀더 편한 에디터 사용 <br>
-> cheditor5 사용 이유 : 소프트웨어 호환성이 좋고 , 설정이 용이하고 , 외관이 적으로 맘에 들었다.
axios 

<h3>문제해결 및 알게된 점</h3>
1. map 함수 오류 <br>
원인 : useEffect에서 posts Data를 다 받아오기전에 먼저 실행되면서 오류가 났던 거였음 <br>
-> 따로 삼항연산자로 Data를 다 받아오기전에 처리를 해줌으로써 해결 <br>
2. redirect 문제 <br>
원인 : 다른 폼에서  => "/" 로 보낼때는 navigate를 사용하여 redirect가 동작함 ,  post를 삭제하고 업데이트된 posts를 보여줘야 하는데 "/" => "/"로  redirect시 작동하지 않음 
같은 루트에서는 똑같은 루트를 적는게 동작 안하는 것 확인 <br>
-> navigate(-1)을 적으면 한 페이지 뒤로 가는 원리를 이용해서 navigate(0)을 적으면 이 페이지를 그대로 반환하지 않을까 해서 써봤는데 redirect 정상 동작함 확인 <br>
3. react-router-dom v6 부터 Link to ={} 로 더이상 props/state 전달 불가능 <br>
-> 따로 서버에 데이터를 요청 해서 받는 식으로 해결 <br>
-> 근데 props로 넘기는게 좀더 효율적일거 같긴한데 server에 요청해서 데이터를 받는게 좀더 비 효율적일거 같음 , 좀 더 공부해보고 나중에 좋은방법 있으면 적용해 봐야함 

