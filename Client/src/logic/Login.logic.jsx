import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {UserIcon, LockIcon, EyeIcon} from "../assets/Icons";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";

function LoginLogic() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateMessage, setValidateMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const {login} = useAuth();

  const navigate = useNavigate();

  const inputs = [
    {
      label: "Email Address",
      placeholder: "Please enter your email",
      name: "email",
      type: "email",
      leftIcon: <UserIcon/>,
    },
    {
      leftIcon: <LockIcon/>,
      label: "Password",
      placeholder: "Please enter your password",
      name: "password",
      type: !showPass ? "password" : "text",
      rightIcon: (
        <button
          onClick={(e) => {
            e?.preventDefault();
            setShowPass((prev) => !prev);
          }}
        >
          {showPass ? (
            <EyeIcon />
          ) : (
            <EyeIcon />
          )}
        </button>
      ),
    },
  ];

  const loginUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const { email, password } = data;
    console.log(email, password);
    setLoading(true);
    try {
      await login(email,password);
    } catch (err) {
      console.log('Error >>>> ', err.message);
      console.log(err.message == 'Firebase: Error (auth/user-not-found).' );
      if (err.message == 'Firebase: Error (auth/user-not-found).' ) {
        toast.error('This email is not registered yet. Please register first.');
      } else if (err.message == 'Firebase: Error (auth/wrong-password).' ) {
        toast.error('Password is incorrect. Please try again.');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    }
    finally {
      setLoading(false);
    }   
  }

  return {
    inputs,
    validateMessage,
    loading,
    setLoading,
    setValidateMessage,
    showPass,
    setShowPass,
    email,
    setEmail,
    password,
    setPassword,
    loginUser,
  };
}

export default LoginLogic;