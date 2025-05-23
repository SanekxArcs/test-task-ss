import { useState } from "react";
import burgerMenu from "../../assets/icons/menu.svg";
import crossMenu from "../../assets/icons/x-menu.svg";
import logoFull from "../../assets/icons/logo-full.svg";
import cartIcon from "../../assets/icons/cart.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="/">
            <img src={logoFull} alt="Logo" />
          </a>
        </div>

        <div className="header__menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menuOpen ? crossMenu : burgerMenu} alt="Menu" />
        </div>

        <nav className={`header__links ${menuOpen ? "header__links--open" : ""}`}>
          <a href="/home" className="header__link">
            Home
          </a>
          <a href="/products" className="header__link">
            Products
          </a>
          <a href="/cart" className="header__link">
            <div className="cart-icon">
              <img src={cartIcon} alt="Cart" />
            </div>
          </a>

        </nav>
      </div>
    </header>
  );
};

export default Header;
