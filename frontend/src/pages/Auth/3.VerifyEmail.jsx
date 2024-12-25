// REACT IMPORTS 
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';

// COMPONENTS
// CSS
import "./Auth.css";
import { LoadingButton } from "../../components/Buttons/Buttons";

function VerifyEmail() {

   // HANDLE LOADING BUTTON COMPONENT
   const [isButtonLoading, setIsButtonLoading] = useState(false);
   const [isButtonDisabled, setIsButtonDisabled] = useState(false);

   // MESSAGE RECIVED FROM BACKEND
   const [message, setMessage] = useState(null);

   // USER RELATED INFO
   const [verificationCode, setVerificationCode] = useState(null);
   const [userEmail] = useState(sessionStorage.getItem("userEmail"));

   useEffect(() => {
      if (!userEmail) {
         setMessage("No Email Provided.");
         setIsButtonDisabled(true);
         return;
      }
   }, []);


   const handleFormSubmitiion = async (event) => {

      // STEP 1 : PREVENT DEFAULT FORM SUBMITTION
      // STEP 2 : START LOADING BUTTON 
      // STEP 3 : MAKE REQUEST TO BACKEND WITH VERIFICATION CODE & USER EMAIL
      // STEP 4 : AWAIT TILL REQUEST COMPLETED 
      // STEP 5 : STOP LOADING BUTTON
      // STEP 6 : IF EVERYTHING SUCCESSFUL REDIREECT TO HOME PAGE 
      // STEP 7 : IF SOMETHING WENT WRONG DISPLAY REASON 

      event.preventDefault(); // STEP 1

      setIsButtonLoading(true); // STEP 2
      const res = await verifyUserEmail(userEmail, verificationCode); // STEP 3 // STEP 4
      setIsButtonLoading(false); // STEP 5

      if (res.success) { // STEP 6 
         window.location.href = `/home/${res.userId}`;
         return;
      }
      setMessage(res.message); // STEP 7
   }


   return (
      <>
         <Helmet>
            <title>Verify Your Email</title>
         </Helmet>

         <div className="authPages">
            <div className="authPagesHeader">
               {/* <img
               src={logo3}
               alt="Logo"
            /> */}
            </div>

            <div className="authPageFormContainer"
            >
               <form className="authForm"
                  onSubmit={handleFormSubmitiion}
               >
                  <h1>Email Verification</h1>

                  <p className="verifyEmailInfo"
                  >
                     Thank you for registering! <br /> Please enter the 6-digit verification code we’ve sent to verify your account.
                  </p>

                  <input className="removeArrows"
                     type="number"
                     required
                     placeholder="Enter 6-digit Code"
                     aria-label="verificationCode"
                     onChange={(e) => setVerificationCode(e.target.value)}
                  />
                  {message &&
                     <p className="message">
                        * {message}
                     </p>
                  }
                  <LoadingButton
                     btnLabel="VERIFY"
                     extraClasses="verifyButton"
                  />
                  <p className="verifyEmailNote">
                     <b>NOTE:</b> The code will expire in 30 minutes
                  </p>
               </form>
            </div>
         </div>
      </>
   )
}
export default VerifyEmail;

