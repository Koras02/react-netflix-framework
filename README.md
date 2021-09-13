## Netflix Clone 포트폴리오

## [Demo 버전 (github)](https://koras02.github.io/react-netflix-framework/)
  
  - 해당 버전을 이용하시려면 본인 firebase api key를 수정하세요
  
  - src -> lib -> firebase.prod
  ```
   const config = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain:process.env.REACT_APP_AUTHDOMAIN_API_KEY,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
      measurementId: process.env.REACT_APP_MEASUREMENTID
   };
  ```


## 참고

- karlhadwen / netflix

- https://github.com/karlhadwen/netflix

- Azazel5 / react-netflix-clone

- https://github.com/Azazel5/NetflixClone

- woochul2 / netflix-clone

- https://github.com/woochul2/netflix-clone

- ranjafunc/ netflix_clone

- https://github.com/ranjafunc/netflix_clone

- jinkycho / netflix-clone

- https://github.com/jinkycho/netflix-clone

- AbanoubTalaatHalim / Netflix 

-https://github.com/AbanoubTalaatHalim/NETFLIX

- DanielJan99 / Netflix Clone

https://github.com/DanielJang99/Netflix_Clone

- Prem3997 / Netflix-Web-App-Clone

https://github.com/Prem3997/Netflix-Web-App-Clone


## 사용 라이브러리

- React \* Redux

  - web Client & server management

- Node.js + NodeExpress

  - web Server & test

- React Redux & toolkit

  - Login & Register Actions

- React firbase
  - Login - Register Tool

  

## 구현할 구조

 ![넷플릭스 클론 구성 drawio](https://user-images.githubusercontent.com/67436032/132532908-acd42c39-dde5-4600-9c64-57f09e46896c.png)


## 진행 상황 
  
 - HomePage (홈페이지)
   - Header(헤더) -> JumboTron(넷플릭스 광고 소개리스트 json으로 구성) -> FaqsContainer(질문Toggle창) -> FooterContainer(하단) 으로 구성 
   - 구현 -> 로그인 버튼 클릭시 로그인 페이지이동 
   
   <br/>
   
   ```
       <IsUserRedirect 
         user={user} 
         loggedInPath={ROUTES.BROWSE} 
         path={ROUTES.HOME}
         exact
         >
          <Home email={email} setEmail={setEmail} />
        </IsUserRedirect>

    ```
    
    ```
      <ProtectedRoute 
        user={user} 
        path={ROUTES.BROWSE}
        >
          <Browse />
        </ProtectedRoute>     
   ```
   
   - ProtectRoute를 사용해서 유저 가 아닐때 홈페이지로 이동하게 만들었습니다.
   
   https://user-images.githubusercontent.com/67436032/132981240-04a45929-ccfb-4412-8672-f1aa4d012426.mp4

 <br />

  - Login (로그인)
     - Header(헤더) -> LoginForm
     
     - 구현 -> 유저로그인 완료시 프로필 이동, 아이디 비밀번호 오류시 에러창 반환, 로그인 에러 액션 reducer함수에 담아서 사용 
     - 구현예정(?) -> 로그인 저장 기능 

     ![스크린샷, 2021-09-12 17-52-08](https://user-images.githubusercontent.com/67436032/132981449-de171096-d419-46c7-b4b5-dc4b5eac28c3.png)
     ![스크린샷, 2021-09-12 17-52-32](https://user-images.githubusercontent.com/67436032/132981453-35762cfd-2b63-4f6e-a711-d85478e32e50.png)
   


   
 
