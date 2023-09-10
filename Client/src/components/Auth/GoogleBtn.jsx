import { GoogleIcon } from "../../assets/Icons";
import { useAuth } from "../../context/AuthContext";

function GoogleBtn() {
  const {googleAuth} = useAuth();
  return (
    <button onClick={googleAuth} className='input-div p-3 inline-flex items-center justify-center'>
        <GoogleIcon/>
    </button>
  )
}

export default GoogleBtn