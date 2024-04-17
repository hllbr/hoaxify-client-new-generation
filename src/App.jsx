import { Link, Outlet } from "react-router-dom";
import { LanguageSelector } from "./shared/components/LanguageSelector";
import { Navbar } from "./shared/components/NavBar";
import { Login } from "./pages/Login";
import { useState } from "react";
const App = () => {
  const [authState,setAuthState] = useState({
    id:0
  })

  const onLoginSuccess = (data)=>{
    setAuthState(data);
  }
  return (
    <>
      <Navbar authState={authState} />
      <div className="container mt-4">
        <Login onLoginSuccess={onLoginSuccess} />
        {/* <Outlet /> */}
        <LanguageSelector />
      </div>
    </>
  );
};

export default App;
