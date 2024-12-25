import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./Auth.css";
import { LoadingButton } from "../../components/Buttons/Buttons";

function RequestPasswordReset() {
   // HANDLE UI INPUTS
   const [userEmail, setUserEmail] = useState("");

   // MESSAGE RECIVED FROM BACKEND
   const [message, setMessage] = useState("");
   const [displayMessage, setDisplayMessage] = useState(false);

   // HANDLE LOADING BUTTON COMPONENT 
   const [isButtonLoading, setIsButtonLoading] = useState(false);

   // SEND PASSWORD RESET LINK
   const handleFormSubmittion = async (e) => {
      e.preventDefault();

      setIsButtonLoading(true); // LOAD BUTTON UNTIL BACKEND REQUEST COMPLETES
      const response = await sendResetPasswordLink(userEmail); // BACKEND REQUEST
      setIsButtonLoading(false); // STOP LOADING BUTTON

      if (response.success) return await useAlertOK("We have sent you an email with a reset password link to get back into your account.");

      setMessage(response.message);
      setDisplayMessage(true);
   }
   return (
      <div className="authPages"
      >
         <div className="authPagesHeader">
            {/* <img
               src={logo3}
               alt="Logo"
            /> */}
         </div>

         <div className="authPageFormContainer"
         >
            <form className="authForm"
               onSubmit={handleFormSubmittion}
            >
               <h1 className="requestPassResetH1">
                  Request Password Reset
               </h1>

               <p className="requestPassResetInfo">
                  Enter your email address below and we will send you a link to reset your password.
               </p>

               <input
                  type="email"
                  required
                  aria-label="Email"
                  placeholder="Email *"
                  onChange={(e) => setUserEmail(e.target.value)}
               />
               {message &&
                  <p className="message">
                     * {message}
                  </p>
               }
               <LoadingButton
                  btnLabel="REQUEST"
                  extraClasses="requestButton"
               />
               <NavLink to="/signup" className="newaccount link"
               >
                  Create new account?
               </NavLink>

               <p className="requestPassResetNote"
               >
                  <b>NOTE: </b> The link will get expired in 60 minutes.
               </p>

            </form>

         </div>

      </div>
   )
}

export default RequestPasswordReset;
