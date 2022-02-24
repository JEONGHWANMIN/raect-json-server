# React Json-Server CRUD NoteApp

### json-server excute `npx json-server ./data.json --port 4000`

<hr>
React , json-server를 이용한 CRUD 구현 <br>
styled compoents  -> js in css 방식사용 <br>
styled reset 사용 <br>
form data 형식 리팩토링 -> 많은 useState를 하나로 묶어서 처리 <br>
처리방식 : https://ghksals0904.tistory.com/98?category=1006712

<h3>Problem</h3>
1. map 함수 오류 <br>
원인 : useEffect에서 posts Data를 다 받아오기전에 먼저 실행되면서 오류가 났던 거였음 <br>
-> 따로 삼항연산자로 Data를 다 받아오기전에 처리를 해줌으로써 해결 <br>
2. redirect 문제 <br>
원인 : 다른 폼에서  => "/" 로 보낼때는 navigate를 사용하여 redirect가 동작함 ,  post를 삭제하고 업데이트된 posts를 보여줘야 하는데 "/" => "/"로  redirect시 작동하지 않음 
같은 루트에서는 똑같은 루트를 적는게 동작 안하는 것 확인 <br>
-> navigate(-1)을 적으면 한 페이지 뒤로 가는 원리를 이용해서 navigate(0)을 적으면 이 페이지를 그대로 반환하지 않을까 해서 써봤는데 redirect 정상 동작함 확인 

