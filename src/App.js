import './App.css';
import React from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import Trending from './Pages/Trending/Trending';
import  Container from '@material-ui/core/Container';
import { Main } from './Pages/Nav';
 

function App() {
  return (
    
       <GlobalProvider>
           <BrowserRouter>
            <>
            <div className="App">
            <Main />
              <Container>
                  <Switch>
                  <Route exact path="/react-netflix-framework" component={Trending} />
                  <Route path="/movies" />
                  <Route path="/tv"/>
                  <Route path="/search" />
                </Switch>
             </Container>
            </div>
            </>

           </BrowserRouter>
       </GlobalProvider>
 
  );
}

export default App;
