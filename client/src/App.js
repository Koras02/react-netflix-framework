import './App.css';
import React from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import Trending from './Pages/Trending/Trending';
import  Container from '@material-ui/core/Container';
import { Main } from './Pages/Nav';
import Movie from './Pages/Movie/Movie';
import Tv from './Pages/Tv/Tv';
import Search from "./Pages/Search/Search";
 

const App = () => {
  return (
       <GlobalProvider>
           <BrowserRouter>
            <>
            <div className="App">
            <Main />
              <Container>
                  <Switch>
                  <Route exact path="/react-netflix-framework" component={Trending} />
                  <Route path="/movies" component={Movie} />
                  <Route path="/tv" component={Tv}/>
                  <Route path="/search" component={Search} />
                  
                </Switch>
             </Container>
            </div>
            </>

           </BrowserRouter>
       </GlobalProvider>
 
  );
}

export default App;
