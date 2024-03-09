import { Outlet } from "react-router-dom";
import { LanguageSelector } from "./shared/components/LanguageSelector";
import { Navbar } from "./shared/components/NavBar";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Outlet />
        <LanguageSelector />
      </div>
    </>
  );
};

export default App;
