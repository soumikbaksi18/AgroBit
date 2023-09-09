import React from "react";
import AuthHeader from "../components/Auth/AuthHeader";
import AuthForm from "../components/Auth/AuthForm";
import RegisterLogic from "../logic/Register.logic";

const RegisterPage = () => {
  const { inputs, registerUser, loading } = RegisterLogic();

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <AuthHeader
        title={"Register a new account"}
        subheader={"Already have an account?"}
        link={"/login"}
        linkText={"Log in"}
      />
      <AuthForm
        inputs={inputs}
        formSubmitFnc={registerUser}
        loading={loading}
        submitBtnText={"Sign up"}
      />
    </div>
  );
};

export default RegisterPage;
