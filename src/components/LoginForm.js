
import React, { useState } from "react";

const LoginForm = ({onLogin}) => {
    const [username ,setUsername] = useState();
    const [password,setPassword]= useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username && password){
            onLogin();

        }else{
            alert("please enter username and password")
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label> Username :- </label>
                <input type="text" id="user"
                onChange={(e)=> setUsername(e.target.value)} placeholder="please enter name"/>
                </div>
                <div>
                <label> Password :- </label>
                <input type="text" id="password" 
                onChange={(e) => setPassword(e.target.value) } placeholder="please enter password"/>

</div>
<div>
                <button type=" submit "> Login </button></div>
            </form>

        </div>
    )
}
export default LoginForm;