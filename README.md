
![header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&&reversal=truesection=header&text=코드캠프-프로젝트&fontSize=90)

![dingco-logo 1.png](https://user-images.githubusercontent.com/114391411/221416282-436bec0d-c5d7-48b3-bb5d-cea5406b6551.png)

`Project` 수료과제

`Members` 이주현

## 프로젝트 소개

코드캠프 교육과정 이후 수료증을 발급받기 위한 과제로 써, 수강기간 내 배웠던 기능들을 종합하여 

브랜드 페이지를 구현 하였음.

## 프로젝트 상세 내용

### 기능 시연

각 기능별로 토글을 생성하고, gif를 이용해 시연 화면을 첨부합니다

- 로그인
    
    ![로그인.gif](https://user-images.githubusercontent.com/114391411/221417859-950a0280-2149-4cfa-b154-77f0e1668829.gif)
    
    - refreshToken이 아닌 비교적 간단한 AccessToken으로 로그인 페이지를 구현하였습니다.
    
- 포인트 충전
    
    ![충전1.gif](https://user-images.githubusercontent.com/114391411/221416868-5c8e5c0f-7467-48c9-8240-c85274b362cc.gif)
    
    - 아임포트를 Modal과 연동시켜 충전기능을 구현하였습니다.
    - 충전된 금액은 graphql api를 통해 mutation을 보내고 상단에있는 포인트에 fetch될 수 있도록 구현하였습니다.
    
- 목록/디테일
    
    ![목록:디테일.gif](https://user-images.githubusercontent.com/114391411/221416809-ebbadd4c-a34a-400c-9b9e-41fbaf536f6e.gif)
    
    - infinite-scroll을 활용한 목록페이지를 구현했습니다.
    - KaKaoMap open api를 활용하여 map을 구현했습니다.
    
- 상품 등록/수정/삭제
    
    ![상품 등록:수정:삭제.gif](https://user-images.githubusercontent.com/114391411/221416839-77bd2346-0cdc-4ce3-a297-e32f9bef0557.gif)
    
    - React-quill을 활용한 상품 등록/수정/삭제페이지를 구현하였습니다.
    
- 상품 구매
    
    ![구매.gif](https://user-images.githubusercontent.com/114391411/221416694-24bee8b2-96e1-4949-9bcf-bec32546cd88.gif)
    
    - graphql-api를 활용한 구매기능을 구현하였습니다.
    
- 댓글/대댓글
    
    ![댓글 대댓글.gif](https://user-images.githubusercontent.com/114391411/221416792-7eedf986-3571-4e47-b508-edda6469bb92.gif)
    
    - 댓글 등록/수정/삭제 기능을 구현하였습니다.
    - 대댓글 등록/수정/삭제 기능을 구현하였습니다.
    - 댓글/대댓글 모두 infinite-scroll을 구현하여 목록을 표기하였습니다.
    
- 권한분기
    
    ![권한분기.gif](https://user-images.githubusercontent.com/114391411/221416750-39e62358-b050-49af-bbcf-1be904335ab3.gif)
    
    - use-hook인 use-Auth라는 함수로 권한분기를 구현하였습니다.

---
