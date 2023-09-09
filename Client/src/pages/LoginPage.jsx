import React from "react";
import AuthHeader from "../components/Auth/AuthHeader";
import AuthForm from "../components/Auth/AuthForm";
import LoginLogic from "../logic/Login.logic";

const LoginPage = () => {
  const { inputs, loginUser, loading } = LoginLogic();

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <AuthHeader
        title={"Log in to your account"}
        subheader={"Don't have an account?"}
        link={"/register"}
        linkText={"Sign up"}
      />
      <AuthForm
        inputs={inputs}
        formSubmitFnc={loginUser}
        loading={loading}
        submitBtnText={"Log in"}
      />
    </div>
  );
};

export default LoginPage;
