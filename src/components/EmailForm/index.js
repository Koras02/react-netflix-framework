/* eslint-disable no-unused-vars */
import React, {useState } from "react";
import * as ROUTES from '../../constants/routes'
import { useHistory } from "react-router";


export default function EmailForm({ email, setEmail }) {
     const history = useHistory();
     const [hasError, setHasError] = useState(false);


     const handleSignUp = (event) => {
         event.preventDefault();

         if (email == '') {
             setHasError(true);
             return;
         }

         history.push(ROUTES.PLAN);
         
         return;
         
     }

     const handleChange = (event) => {
         setHasError(false);
         setEmail(event.target.value);
     };

 

     
}