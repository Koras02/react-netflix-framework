import React,{createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";


//initial state
const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};

// create Context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = (props) =>{
    const [state,dispatch] = useReducer(AppReducer, initialState);

    //store our movies in localStorage
    useEffect(()=>{
        localStorage.setItem('watchlist',JSON.stringify(state.watchlist))
        localStorage.setItem('watched',JSON.stringify(state.watched))
    },[state])

    //actions
    const add_Movie_to_watchlist = (movie) =>{
        dispatch({type:"ADD_MOVIE_TO_WATCHLIST", payload: movie});
    }
    const remove_Movie_from_watchlist = (id) =>{
        dispatch({type:"REMOVE_MOVIE_FROM_WATCHLIST", payload: id});
    }
    const add_Movie_to_watched = (movie) =>{
        dispatch({type:"ADD_MOVIE_TO_WATCHED", payload: movie});
    }
    const move_to_watchlist = (movie) =>{
        dispatch({type:"MOVE_TO_WATCHLIST", payload: movie});
    }
    const remove_from_watched = (id) =>{
        dispatch({type:"REMOVE_FROM_WATCHED", payload: id})
    }

    return(
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                watched: state.watched,
                add_Movie_to_watchlist,
                remove_Movie_from_watchlist,
                add_Movie_to_watched,
                move_to_watchlist,
                remove_from_watched,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}