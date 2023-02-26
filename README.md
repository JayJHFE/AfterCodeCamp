# 코드캠프 - 프로젝트

# 프로젝트 : 코드캠프 수료과제

![dingco-logo 1.png](https://user-images.githubusercontent.com/114391411/221416282-436bec0d-c5d7-48b3-bb5d-cea5406b6551.png)

`**Project**` 수료과제

`**Members**` 이주현

## 프로젝트 소개

코드캠프 교육과정 이후 수료증을 발급받기 위한 과제로 써, 수강기간 내 배웠던 기능들을 종합하여 

브랜드 페이지를 구현 하였음.

## 프로젝트 상세 내용

### 기능 시연

각 기능별로 토글을 생성하고, gif를 이용해 시연 화면을 첨부합니다

- 로그인
    
    ![로그인.gif](%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%E1%84%8F%E1%85%A2%E1%86%B7%E1%84%91%E1%85%B3%20-%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20460ad6bbf4334536b16404d126529cf6/%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2580%25E1%2585%25B3%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AB.gif)
    
    - refreshToken이 아닌 비교적 간단한 AccessToken으로 로그인 페이지를 구현하였습니다.
    
- 회원가입
    
    ![일반회원가입.gif](%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%E1%84%8F%E1%85%A2%E1%86%B7%E1%84%91%E1%85%B3%20-%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20460ad6bbf4334536b16404d126529cf6/%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF%25E1%2584%2587%25E1%2585%25A1%25E1%2586%25AB%25E1%2584%2592%25E1%2585%25AC%25E1%2584%258B%25E1%2585%25AF%25E1%2586%25AB%25E1%2584%2580%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25B8.gif)
    
    - react-daum-postcode 라이브러리를 활용한 주소검색 기능 추가
    - canvas를 활용한 프로필 crop 모달창 구현
    
    ![로그인(유저).gif](%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%E1%84%8F%E1%85%A2%E1%86%B7%E1%84%91%E1%85%B3%20-%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20460ad6bbf4334536b16404d126529cf6/%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2580%25E1%2585%25B3%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AB(%25E1%2584%258B%25E1%2585%25B2%25E1%2584%258C%25E1%2585%25A5).gif)
    
- 포인트 충전
    
    ![충전1.gif](%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%E1%84%8F%E1%85%A2%E1%86%B7%E1%84%91%E1%85%B3%20-%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20460ad6bbf4334536b16404d126529cf6/%25E1%2584%258E%25E1%2585%25AE%25E1%2586%25BC%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB1.gif)
    
    - 아임포트를 Modal과 연동시켜 충전기능을 구현하였습니다.
    - 충전된 금액은 graphql api를 통해 mutation을 보내고 상단에있는 포인트에 fetch될 수 있도록 구현하였습니다.
    
- 목록/디테일
    
    ![목록:디테일.gif](%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%E1%84%8F%E1%85%A2%E1%86%B7%E1%84%91%E1%85%B3%20-%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20460ad6bbf4334536b16404d126529cf6/%25E1%2584%2586%25E1%2585%25A9%25E1%2586%25A8%25E1%2584%2585%25E1%2585%25A9%25E1%2586%25A8%25E1%2584%2583%25E1%2585%25B5%25E1%2584%2590%25E1%2585%25A6%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF.gif)
    
    - infinite-scroll을 활용한 목록페이지를 구현했습니다.
    - KaKaoMap open api를 활용하여 map을 구현했습니다.
    
- 상품 등록/수정/삭제
    
    ![상품 등록:수정:삭제.gif](%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%E1%84%8F%E1%85%A2%E1%86%B7%E1%84%91%E1%85%B3%20-%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20460ad6bbf4334536b16404d126529cf6/%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25BC%25E1%2584%2591%25E1%2585%25AE%25E1%2586%25B7_%25E1%2584%2583%25E1%2585%25B3%25E1%2586%25BC%25E1%2584%2585%25E1%2585%25A9%25E1%2586%25A8%25E1%2584%2589%25E1%2585%25AE%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25A8%25E1%2584%258C%25E1%2585%25A6.gif)
    
    - React-quill을 활용한 상품 등록/수정/삭제페이지를 구현하였습니다.
    
- 상품 구매
    
    ![구매.gif](https://user-images.githubusercontent.com/114391411/221416694-24bee8b2-96e1-4949-9bcf-bec32546cd88.gif)
    
    - graphql-api를 활용한 구매기능을 구현하였습니다.
    
- 댓글/대댓글
    
    ![댓글 대댓글.gif](%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%E1%84%8F%E1%85%A2%E1%86%B7%E1%84%91%E1%85%B3%20-%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20460ad6bbf4334536b16404d126529cf6/%25E1%2584%2583%25E1%2585%25A2%25E1%2586%25BA%25E1%2584%2580%25E1%2585%25B3%25E1%2586%25AF_%25E1%2584%2583%25E1%2585%25A2%25E1%2584%2583%25E1%2585%25A2%25E1%2586%25BA%25E1%2584%2580%25E1%2585%25B3%25E1%2586%25AF.gif)
    
    - 댓글 등록/수정/삭제 기능을 구현하였습니다.
    - 대댓글 등록/수정/삭제 기능을 구현하였습니다.
    - 댓글/대댓글 모두 infinite-scroll을 구현하여 목록을 표기하였습니다.
    
- 권한분기
    
    ![권한분기.gif](%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%E1%84%8F%E1%85%A2%E1%86%B7%E1%84%91%E1%85%B3%20-%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20460ad6bbf4334536b16404d126529cf6/%25E1%2584%2580%25E1%2585%25AF%25E1%2586%25AB%25E1%2584%2592%25E1%2585%25A1%25E1%2586%25AB%25E1%2584%2587%25E1%2585%25AE%25E1%2586%25AB%25E1%2584%2580%25E1%2585%25B5.gif)
    
    - use-hook인 use-Auth라는 함수로 권한분기를 구현하였습니다.

---
