import './App.css';
import React from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import Trending from './Pages/Trending/Trending';
import  Container from '@material-ui/core/Container';
 

function App() {
  return (
    
       <GlobalProvider>
           <BrowserRouter>
            <>
            <div className="App">
              <Container>
                  <Switch>
                  <Route exact path="/react-netflix-framework" component={Trending} />
                </Switch>
             </Container>
            </div>
            </>

           </BrowserRouter>
       </GlobalProvider>
 
  );
}

export default App;
