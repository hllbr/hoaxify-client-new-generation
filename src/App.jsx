import { Link, Outlet } from "react-router-dom";
import logo from "./assets/richCat.png";
import { LanguageSelector } from "./shared/components/LanguageSelector";
import { useTranslation } from "react-i18next";
const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <nav className="navbar bg-body-tertiary navbar-expand shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand mb-0 h1 " to="*">
            <img src={logo} width={70} height={70} />
            Hoaxify
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                {t("Sign Up")}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-4">
        <Outlet />
        <LanguageSelector />
      </div>
    </>
  );
};

export default App;
