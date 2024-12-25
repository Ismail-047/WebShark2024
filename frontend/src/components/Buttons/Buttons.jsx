import React from "react"
import "./Buttons.css";

function LoadingButton({
   btnLabel,
   extraClasses,
   isButtonLoading,
   isButtonDisabled
}) {

   return (
      <button
         type="submit"
         disabled={isButtonDisabled}
         className={`loadingButtonClass ${extraClasses} ${isButtonDisabled ? "disabledButton" : ""}`}
      >
         {isButtonLoading ? (
            <div className="loader spinLoader"></div>
         ) : (
            btnLabel
         )}
      </button>
   )
}
export { LoadingButton };
