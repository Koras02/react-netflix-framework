import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from "@material-ui/lab/Pagination";
 
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent:"center",
        marginTop: '10px',
        // color: "rgba(0,0,0,1)",
        // '& > * + *': {
        //     marginTop: theme.spacing(2),
        // },
    },
}));


const PaginationComponent = ({setPage, numPages=6}) => {
    const classes = useStyles();

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    };
    
    return (
        <div className={classes.root}>
           <Pagination
              count={numPages}
              onChange={(e) => handlePageChange(e.target.textContent)}
              hideNextButton={true}
              hidePrevButton={true}
              color={"primary"}
              />
        </div>
    )
}

export default PaginationComponent
