
import { useState } from "react";
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";

import InputPassword from "../../components/InputPassword/InputPassword";


import "./Auth.css";
import { LoadingButton } from "../../components/Buttons/Buttons";

function Login() {

   const [message, setMessage] = useState("");
   const [userEmail, setUserEmail] = useState("");
   const [userPassword, setUserPassword] = useState("");

   return (
      <>
         <Helmet>
            <title>Login</title>
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
                  <h1 className="loginH1">
                     LOGIN
                  </h1>

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
                  {message &&
                     <p className="message">
                        * {message}
                     </p>
                  }
                  <p className="forgotPassword"
                  >
                     Forgot Password?
                     <NavLink to="/reset-password" className="link">
                        Reset now.
                     </NavLink>
                  </p>

                  <LoadingButton
                     btnLabel="LOGIN"
                  />

                  <p className="signupLink">
                     Already have an account?
                     <NavLink to="/signup" className="link">
                        Signup.
                     </NavLink>
                  </p>
               </form>
            </div>
         </div>
      </>
   )
}
export default Login;
