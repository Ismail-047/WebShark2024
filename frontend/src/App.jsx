import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/1.Login";
import Signup from "./pages/Auth/2.Signup";
import VerifyEmail from "./pages/Auth/3.VerifyEmail";
import RequestPasswordReset from "./pages/Auth/4.RequestPasswordReset";
import ResetPassword from "./pages/Auth/5.ResetPassword";

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/"
                  element={<ResetPassword />}
               />
               <Route path="/login"
                  element={<Login />}
               />
               <Route path="/signup"
                  element={<Signup />}
               />
               <Route path="/verify-email"
                  element={<VerifyEmail />}
               />
               <Route path="/reset-password"
                  element={<ResetPassword />}
               />
               <Route path="/request-reset-password"
                  element={<RequestPasswordReset />}
               />
               {/* <Route path=""
                  element={ }
               /> */}
               {/* <Route path=""
                  element={ }
               /> */}
               {/* <Route path=""
                  element={ }
               /> */}
               {/* <Route path=""
                  element={ }
               /> */}
               {/* <Route path=""
                  element={ }
               /> */}
               {/* <Route path=""
                  element={ }
               /> */}
               {/* <Route path=""
                  element={ }
               /> */}
               {/* <Route path=""
                  element={ }
               /> */}
               {/* <Route path=""
                  element={ }
               /> */}
               {/* <Route path=""
                  element={ }
               /> */}
               {/* <Route path=""
                  element={ }
               /> */}
               {/* <Route path=""
                  element={ }
               /> */}
               {/* <Route path=""
                  element={ }
               /> */}
               {/* <Route path=""
                  element={ }
               /> */}
               {/* <Route path=""
                  element={ }
               /> */}
            </Routes>
         </BrowserRouter>
      </>
   )
}
export default App;
