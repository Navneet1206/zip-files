import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Nav.css";

// NavBarItem component to render each navigation item
const NavBarItem = ({ title, link }) => (
  <li className="nav-item">
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
      }
      end
    >
      {title}
    </NavLink>
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false); // State to toggle mobile menu

  return (
    <nav className={`navbar ${toggleMenu ? "navbar-shadow" : ""}`}>
      {/* Logo Section */}
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>

      {/* Desktop Menu */}
      <ul className="desktop-menu">
        {[
          { title: "Home", link: "/" },
          { title: "Services", link: "/services" },
          { title: "Transactions", link: "/transactions" },
          { title: "Tutorials", link: "/tutorials" },
          { title: "Contact-Us", link: "/contact-us" },
        ].map((item, index) => (
          <NavBarItem key={index} title={item.title} link={item.link} />
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="mobile-menu-container">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="menu-icon"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="menu-icon"
            onClick={() => setToggleMenu(false)}
          />
        )}

        {toggleMenu && (
          <ul className="mobile-menu">
            <li className="close-icon">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {[
              { title: "Home", link: "/" },
              { title: "Services", link: "/services" },
              { title: "Transactions", link: "/transactions" },
              { title: "Tutorials", link: "/tutorials" },
              { title: "Contact-Us", link: "/contact-us" },
            ].map((item, index) => (
              <NavBarItem key={index} title={item.title} link={item.link} />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
