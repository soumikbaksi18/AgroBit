import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {UserIcon, LockIcon, EyeIcon} from "../assets/Icons/Icons"
import { useAuth } from "../context/AuthContext";
import {toast} from 'react-hot-toast'

function RegisterLogic() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateMessage, setValidateMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {signup} = useAuth();

  const inputs = [
    {
      label: "Full Name",
      placeholder: "Please enter your full name",
      name: "name",
      type: "text",
      leftIcon: <UserIcon/>,
      required: true,
    },
    {
      label: "Email Address",
      placeholder: "Please enter your email",
      name: "email",
      type: "email",
      leftIcon: <UserIcon/>,
      required: true,
    },
    {
      leftIcon: <LockIcon/>,
      label: "Password",
      placeholder: "Please pick a strong password",
      name: "password",
      required: true,
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

  const registerUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const { name, email, password } = data;
    console.log(name, email, password);
    setLoading(true);
    try {
      await signup(name, email,password);
    } catch (err) {
      console.error(err.message);
      if(err.message.includes('already-in-use')){
       toast.error('Email already in use')
      }
      else if(err.message.includes('weak-password')){
        toast.error('Password must be at least 6 characters long')
      }
      else{
        toast.error('Something went wrong. Please try again later')
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
    registerUser,
  };
}

export default RegisterLogic;