import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, SignIn, SignUp} from './pages';
import * as ROUTES  from "./constants/routes";
import { useAuthListener } from './hooks';
import { IsUserRedirect } from './helpers/routes';
 
export default function App() {
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
       </Switch>
    </Router>
  );
}


 


 