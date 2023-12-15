import "./style.css";
import Searchinput from "./SearchInput";
const Header = () => {
  return (
    <>
      <div className="container">
        <div className="nav">
          <a href="/">Sets</a>
          <a href="/skills">Skils</a>
        </div>
        <div className="login">
          <a href="">Login</a>
          <a href="">Register</a>
        </div>
      </div>
      <Searchinput />
    </>
  );
};

export default Header;
