import {useState, useEffect} from "react";
import Nav from "../Nav/";
import TextField  from "@material-ui/core/TextField";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import axios from "axios";
import { useDebouncedEffect } from "./useDebouncedEffect";
import "./style/Search.css";
import SingleMovie from "../SingleMovie/SingleMovie";
import PaginationComponent from "../Pagination/PaginationComponent";



const Search = () => {
    const darkTheme = createTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#fff',
            },
        },
    });


    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [numPages, setNumPages] = useState(0);
    const [searchText,setSearchText] = useState('');
    const [type, setType] = useState(0);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    function getMovies(page) {
        axios({
           method: "GET",
           url: `https://api.themoviedb.org/3/search/${type?'tv':'movie'}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&query=${searchText}&page=${page}`

        }).then(response => {
            setMovies(response.data.results ?? [])
            setNumPages(response.data.total_pages)
            
        }).catch(err => console.log(err.response))
    }
    useDebouncedEffect(() => {
        getMovies(page);
        setPage(1);
    }, [searchText], 500);

    useEffect(() => {
        getMovies(page)
    },[type, page, getMovies]);

    return (
        <>
          <div className="content_wrapper">
              <span className="page__search">검색</span>
              <ThemeProvider theme={darkTheme}>
                  <div className="search__container">
                      <TextField style={{flex: 1}} className={`search__box`} label={"영화 검색"} variant={'filled'}
                      value={searchText}
                      onChange={(e) => {
                          setSearchText(e.target.value)
                      }} />
                      <Button variant={'contained'} style={{marginLeft: '10px'}} onClick={getMovies}>
                          <SearchIcon fontSize="large"/>
                      </Button>
                      </div>
            <Tabs 
                value={type}
                indicatorColor={'primary'}
                textColor={'primary'}
                style={{margin: "0 auto", justifyContent: 'center', paddingBottom: 5}}
                onChange={(event, newValue) => {
                    setType(newValue);
                    setPage(1);
                }}>
                 <Tab label={'Movies'} style={{width: "50%"}}/>
                 <Tab label={'TV series'} style={{width: "50%"}}/>

                </Tabs>
        </ThemeProvider>
        <div className="movies">
        {movies.length > 0 && movies.map((movie, index) => (
                    <SingleMovie key={movie.id} media_type={type ? "tv" : "movie"} id={movie.id} movie={movie} {...movie} />
                ))}
          {searchText && movies.length<1 && (type ?
                        <h2>TV 검색결과가 없습니다.</h2>:
                        <h2>영화 검색결과가 없습니다.</h2>)}
            </div>
            {numPages>1 && (
                <PaginationComponent setPage={setPage} numPages={numPages} />
            )}
            </div>
    
        </>
    )

}

export default Search;