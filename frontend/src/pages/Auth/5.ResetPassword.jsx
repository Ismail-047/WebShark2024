import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import InputPassword from "../../components/InputPassword/InputPassword";

import "./Auth.css";
import { LoadingButton } from "../../components/Buttons/Buttons";

function ResetPassword() {
   // HANDLE QUERY PARAMETERS
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const token = queryParams.get("token");

   // MESSAGE RECIVED FROM BACKEND
   const [message, setMessage] = useState("");
   const [displayMessage, setDisplayMessage] = useState(false);

   // HANDLE LOADING BUTTON COMPONENT
   const [isButtonDisabled, setIsButtonDisabled] = useState(false);
   const [isButtonLoading, setIsButtonLoading] = useState(false);

   // HANDLE UI INPUTS
   const [newPassword, setNewPassword] = useState(false);
   const [confrimNewPassword, setConfrimNewPassword] = useState(false);

   // HANDLE IF SOMEONE VISITS THE LINK MANUALLY
   useEffect(() => {
      if (!token) {
         setMessage("Error! No token provided.");
         setDisplayMessage(true);
         setIsButtonDisabled(true);
      } else {
         setMessage("");
         setIsButtonDisabled(false);
      }
   }, [token]);

   // RESETS USER PASSWORD
   const handleFormSubmittion = async (e) => {
      e.preventDefault();

      setIsButtonLoading(true); // LOAD BUTTON UNTIL BACKEND REQUEST COMPLETES
      const response = await resetUserPassword(token, newPassword, confrimNewPassword); // BACKEND REQUEST
      setIsButtonLoading(false); // STOP LOADING BUTTON

      if (response.success === true) { // IF EVERY THING SUCCESSFUL
         await useAlertOK("Password Reset Successfull.");
         return window.location.href = "/login"
      }
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
               <h1 className="resetPassH1">
                  Reset Password
               </h1>

               <p className="resetPassInfo">
                  Please enter a new password for your account.
               </p>

               <InputPassword
                  placeholder="New Password *"
                  setPassword={setNewPassword}
               />
               <InputPassword
                  placeholder="Confirm New Password *"
                  setPassword={setConfrimNewPassword}
               />
               {message &&
                  <p className="message">
                     * {message}
                  </p>
               }
               <LoadingButton
                  btnLabel="RESET"
                  extraClasses="resetButton"
                  isButtonLoading={isButtonLoading}
                  isButtonDisabled={isButtonDisabled}
               />
               <p className="resetPassNote">
                  <b>NOTE: </b> This link will get expired in 60 minutes.
               </p>

            </form>
         </div>

      </div>
   )
}

export default ResetPassword
