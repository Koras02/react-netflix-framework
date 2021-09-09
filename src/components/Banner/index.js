import { Add, PlayArrow } from "@material-ui/icons";
import React, {useEffect, useState} from "react";
import ax from "../../utils/axios"
import {requests, BASE_URL} from '../../utils/requests';
import "./Banner.css";
// import Details from '../Details/Details';
import { ClickAwayListener } from "@material-ui/core";
import axios from 'axios'
import { useHistory } from "react-router";
import { turncate } from '../../utils/turncate'
import * as ROUTES from '../../constants/routes';
import Loading from "./Loading/Loading";
import Details from "./Details/Details";

export default function Banner() {
     const [item, setItem] = useState(null);
     const [showDetails, setShowDetails] = useState(false);
     const [loading, setLoading] = useState(true);

     const history = useHistory();

     useEffect(() =>{
        //  const source = axios.CancleToken.source();
         const source = axios.CancelToken.source();

         async function fetchData() {
             setLoading(true);

             // fetchData에 처음 로딩이 되면서 넷플릭스 오리지널 배너를 가져옴
             let bannerData = requests.fetchNetflixOriginalTv;

             // 만약 처음 홈페이지에서 Movie 페이지로 가게된다면 Banner 데이터는 
             // 영화 관련 배너로 바뀜
             if (history.location.pathname === ROUTES.BROWSEMOVIES) {
                bannerData = requests.fetchTopRatedMovies;
             }
             await ax
              .get(bannerData, {
                  cancelToken: source.token,
              })
              .then((response) => {
                  setLoading(false);
                  const data = response.data.results.filter(
                      (item) => item?.backdrop_path
                  );
                  setItem(data[Math.floor(Math.random() * data?.length - 1)]);

              })
              .catch(() => {
                  setLoading(false);
                  console.log("요청 실패");
              });
         }
         fetchData();
         // fetch할때마다 source 최적화
         return () => {
             source.cancle()
         }
     }, [history.location.pathname])

     useEffect(() =>{
         if (showDetails) {
             document.documentElement.style.overflow = "hidden";
         } else {
             document.documentElement.style.overflow = "auto";
         } 
         return () =>{
             document.documentElement.style.overflow = "auto";
         }
     }, [showDetails])

     return (
         <>
         <header 
           className="banner"
           style={
               item 
                ? {
                    backgroundImage: `linear-gradient(
                        90deg,
                        rgba(0, 0, 0, 1),
                        rgba(0, 0, 0, 0.45)),
                        url("${BASE_URL}${item?.backdrop_path}")`,
                      }
                      : {}
                }
                >
                    {/* 로딩 */}
 
                 {loading && (
                     <Loading
                        LoaderType="ThreeDots"
                        addStyle={{
                            backgroundColor: "#141414",
                            position:"absolute",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                        }}
                 />
                )}

                <div className="banner__contents">
                    {history.location.pathname !== ROUTES.MOVIES && (
                        <h2 className="banner__contentType">
                             <span>넷플릭스 오리지널</span>
                        </h2>
                    )}
                    <h1 className="banner__title">
                        {item?.title || item?.name  || item?.original_name}
                    </h1>
                    <p className="banner__description">
                        </p>
                    <div className="banner__buttons">
                       <button 
                         className="banner__button play"
                         onClick={() => {
                             setShowDetails(false);
                         }}  
                         >
                          <span className="banner__text">
                              <PlayArrow />
                              &nbsp;재생
                          </span>
                         </button>
                        <button
                        className="banner__button"
                        onClick={() => {
                            alert(
                            "현재 트레일러 준비중 입니다."
                            );
                        }}
                       >
                            <span className="banner__text">
                               <Add />
                               &nbsp;My List 추가
                            </span>
                        </button>
                     </div>
                     <p className="banner__description">{turncate(item?.overview, 150)}</p>
                </div>
                <div className="banner--fadeBottom" />
                </header>
                 {/*  모달 창 */ }  
                
                {showDetails && (
                    <div className="modal">
                      <ClickAwayListener
                        onClickAway={() => {
                            setShowDetails(false);
                        }} 
                        >
                            <div>
                                <Details
                                  itemDetails={item}
                                  handleClose={() => {
                                      setShowDetails(false);
                                  }}
                                />
                            </div>
                        </ClickAwayListener>
                    </div>
                )}
        </>
     );
}

 