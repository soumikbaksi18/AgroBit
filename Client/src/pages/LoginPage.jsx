import AuthHeader from "../components/Auth/AuthHeader";
import AuthForm from "../components/Auth/AuthForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <AuthHeader
        title={"Log in to your account"}
        subheader={"Don't have an account?"}
        link={"/register"}
        linkText={"Sign up"}
      />
      <AuthForm/>
    </div>
  );
};

export default LoginPage;
