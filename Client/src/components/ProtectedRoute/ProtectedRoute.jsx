import {useEffect} from 'react'
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({children, onLogin}) {
    const {currentUser} = useAuth();

    console.log('onLogin: ',onLogin, currentUser);
  
    const navigate = useNavigate()

    useEffect(() => {
        console.log('currentUser: ',!onLogin && currentUser !== null);
        if(!onLogin && currentUser !== null){
            console.log('navigating to /system');
            navigate('/system')
        }
        if(onLogin && currentUser === null){
            console.log('navigating to /');
            navigate('/')
        }
    }, [currentUser])

    return children
}

export default ProtectedRoute