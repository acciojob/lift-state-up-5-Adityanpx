
import React, { useState } from "react";
import LoginForm from "./LoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn]=useState(false)

  const handleLogin = () =>{
    setIsLoggedIn(true);
  }



  return(
    <div>
      <p>{isLoggedIn ? "You are Logged in" : "Please log in"}</p>
      {!isLoggedIn && <LoginForm onLogin={handleLogin}/>}

    </div>
  )

}

export default App;