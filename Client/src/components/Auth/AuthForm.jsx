import React from "react";
import GoogleBtn from "./GoogleBtn";

function AuthForm() {  
  return (
    <div className="bg-white rounded-2xl font-inter p-7 space-y-5 shadow-[0_4px_8px_0_rgba(48, 49, 51, 0.1)] shadow-[0_0_1px_0_rgba(48, 49, 51, 0.05)]">  
      <GoogleBtn/>
    </div>
  );
}

export default AuthForm;
