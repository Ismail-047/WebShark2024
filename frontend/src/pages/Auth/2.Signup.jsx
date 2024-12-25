
import { useState } from "react";
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";

import InputPassword from "../../components/InputPassword/InputPassword";

import { LoadingButton } from "../../components/Buttons/Buttons";
import "./Auth.css";

function Signup() {

   const [message, setMessage] = useState("");
   const [userEmail, setUserEmail] = useState("");
   const [userName, setUserName] = useState("");
   const [userPassword, setUserPassword] = useState("");
   const [userConfirmPassword, setUserConfirmPassword] = useState("");

   return (
      <>
         <Helmet>
            <title>Login - Chat Nexus</title>
         </Helmet>

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
               // onSubmit={ }
               >
                  <h1>SIGN UP</h1>

                  <input
                     type="text"
                     required
                     aria-label="Full Name"
                     placeholder="Full Name *"
                     onChange={(e) => setUserName(e.target.value)}
                  />
                  <input
                     type="email"
                     required
                     aria-label="Email"
                     placeholder="Email *"
                     onChange={(e) => setUserEmail(e.target.value)}
                  />
                  <InputPassword
                     placeholder="Password *"
                     setPassword={setUserPassword}
                  />
                  <InputPassword
                     placeholder="Confirm Password *"
                     setPassword={setUserConfirmPassword}
                  />
                  {message &&
                     <p className="message">
                        * {message}
                     </p>
                  }
                  <LoadingButton
                     btnLabel="SIGNUP"
                     extraClasses="signupButton"
                  />
                  <p className="loginLink"
                  >
                     Already have an account?
                     <NavLink to="/signup" className="link"
                     >
                        Login.
                     </NavLink>
                  </p>
               </form>
            </div>
         </div>
      </>
   )
}

export default Signup
