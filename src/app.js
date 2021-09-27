import React,{useState} from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home,Browse ,SignIn, SignUp}from './pages';
import * as ROUTES  from "./constants/routes";
import { useAuthListener } from './hooks';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import LoginHelp from './pages/LoginHelp';
import Search from './pages/search';
 
 
 
export default function App() {
  console.log("노드 제외");
  console.log("현재 버전 2.0")
  console.log("제외된 폴더 노드")
  // 처음엔 useAuth로 연습 
   const { user } = useAuthListener();

   const [email,setEmail] = useState('')

  return (
   <Router>
        <Switch>
         {/* 입력받을 유저와 로그인 경로를 불러옴 최종적으로 로그인 경로는 Browse로 가고 시작점은 SignIn 이다.*/}
         <IsUserRedirect 
         user={user} 
         loggedInPath={ROUTES.BROWSE} 
         path={ROUTES.HOME}
         exact
         >
          <Home email={email} setEmail={setEmail} />
        </IsUserRedirect>

        <IsUserRedirect
           user={user}
           loggedInPath={ROUTES.BROWSE}
           path={ROUTES.SIGN_UP}
        > 
        <SignUp />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          >
          <SignIn />
          </IsUserRedirect> 
          <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.LOGIN_HELP}
          >
          <LoginHelp />
          </IsUserRedirect> 

      {/* -------------  넷플릭스 부분 ----------------------------  */}
        <ProtectedRoute 
        user={user} 
        path={ROUTES.BROWSE}
        >
          <Browse />
        </ProtectedRoute>     

         <ProtectedRoute
          user={user}
          loggedInPath={ROUTES.BROWSE}
          patch={ROUTES.SEARCH}
        >
           <Search />
        </ProtectedRoute>
     


 
       </Switch>
    </Router>
  );
}


 


 