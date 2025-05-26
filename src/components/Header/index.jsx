import { useState } from "react";
import burgerMenu from "../../assets/icons/menu.svg";
import crossMenu from "../../assets/icons/x-menu.svg";
import CartIcon from "../CartIcon";
import LogoFullIcon from "../LogoFullIcon";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="/" aria-label="Logo earth go">
            <LogoFullIcon
              overGradient="hoverGradient"
              className="header__logo-img"
            />
          </a>
        </div>

        <nav
          aria-label="Navigation"
          className={`header__links ${menuOpen ? "header__links--open" : ""}`}
        >
          <a href="/home" className="header__link">
            Home
          </a>
          <a href="/products" className="header__link">
            Products
          </a>
          <a href="/cart" aria-label="Cart" className="header__cart">
            <CartIcon hoverGradient="hoverGradient" />
          </a>
        </nav>

        <div
          aria-label="Menu"
          className="header__menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src={menuOpen ? crossMenu : burgerMenu} alt="Menu" />
        </div>
      </div>
    </header>
  );
};

export default Header;
