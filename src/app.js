import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home,Browse ,SignIn, SignUp} from './pages';
import * as ROUTES  from "./constants/routes";
import { useAuthListener } from './hooks';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import LoginHelp from './pages/LoginHelp';
 
export default function App() {
  console.log("노드 제외");
  console.log("현재 버전 2.0")
  console.log("제외된 폴더 노드")
  // 처음엔 useAuth로 연습 
   const { user } = useAuthListener();

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
          <Home />
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
        <ProtectedRoute 
        user={user} 
        path={ROUTES.BROWSE}
        >
          <Browse />
        </ProtectedRoute>    

         
       </Switch>
    </Router>
  );
}


 


 