import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from"../firebase.init";
import Loading from "../pages/Shared/Loading";
const useToken = user1 =>{
    const [token, setToken] = useState('');
    const[user,loading]= useAuthState(auth);
    if(loading){
        <Loading/>
    }
    console.log("amar email",user);
    useEffect( () =>{
        const email = user?.email;
        console.log("amar email",email);
        const currentUser = {email: email};
        if(email){
            fetch(`https://radiant-inlet-73945.herokuapp.com/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }

    }, [user]);
    return [token];
}

export default useToken;