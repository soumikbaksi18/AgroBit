import AuthHeader from "../components/Auth/AuthHeader";
import AuthForm from "../components/Auth/AuthForm";

const RegisterPage = () => {

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <AuthHeader
        title={"Register a new account"}
        subheader={"Already have an account?"}
        link={"/login"}
        linkText={"Log in"}
      />
      <AuthForm/>
    </div>
  );
};

export default RegisterPage;
