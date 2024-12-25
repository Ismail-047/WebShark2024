// REACT
import { useState } from "react";
// ICONS
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
// CSS
import "./InputPassword.css";

function InputPassword({
   placeholder,
   setPassword,
   extraClasses,
}) {
   // SHOW / HIDE USER PASSWORD 
   const [showPassword, setShowPassword] = useState(false);
   // SHOW EYE BUTTONS ON INPUT HOVER
   const [showEyeIcon, setShowEyeIcon] = useState(false);

   return (
      <div className={`inputPasswordContainer ${extraClasses}`}
         onMouseEnter={() => setShowEyeIcon(true)}
         onMouseLeave={() => setShowEyeIcon(false)}
      >
         <input className="inputTypePassword"
            type={`${showPassword ? "text" : "password"}`}
            required
            name={placeholder}
            aria-label={placeholder}
            placeholder={placeholder}
            onChange={(e) => setPassword(e.target.value)}
         />
         <div style={{ display: showEyeIcon ? "" : "none" }}
         >
            {showPassword ? (
               <FaRegEyeSlash
                  className="eyesIcon"
                  onClick={() => setShowPassword(false)}
               />
            ) : (
               <FaRegEye
                  className="eyesIcon"
                  onClick={() => setShowPassword(true)}
               />
            )}
         </div>
      </div>
   )
}
export default InputPassword;

