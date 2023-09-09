import React from "react";
import Input from "./Input";
import Button from '../Button'
import GoogleBtn from "./GoogleBtn";

function AuthForm({ inputs, formSubmitFnc, loading, submitBtnText }) {
  
  return (
    <div className="bg-white rounded-2xl font-inter p-7 space-y-5 shadow-[0_4px_8px_0_rgba(48, 49, 51, 0.1)] shadow-[0_0_1px_0_rgba(48, 49, 51, 0.05)]">  
    
      <form onSubmit={formSubmitFnc} className="w-full space-y-4 max-w-[500px] lg:w-[450px]">
        {inputs.map((input, index) => (
          <Input key={input.name} {...input} show={true} />
        ))}
        <Button loading={loading} type={"submit"} text={submitBtnText} />
      </form>
      <p className="text-placeholder">Or continue with</p>
      <GoogleBtn/>
    </div>
  );
}

export default AuthForm;
