import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import LogoGDG from "../../assets/images/LogoGDG";
import LogoMenu from "../../assets/images/MenuLogo"
import styles from "../../styles/Navbar.module.css";

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setScrolling] = useState(false);

  const menu = [
    { name: "Sobre", ref: "/#about" },
    { name: "Trilhas", ref: "/#tracks" },
    { name: "Agenda", ref: "/#agenda" },
    { name: "Palestrantes", ref: "/#speakers" },
    { name: "Patrocinadores", ref: "/#sponsors" },
  ];

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset === 0) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    };
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={isScrolling ? styles.navbar_fixed_scrolling : styles.navbar_fixed}>
      <Navbar className={styles.main_navbar} color="faded" light expand="lg">
        <NavbarBrand className={styles.nav_brand}>{isScrolling ? <LogoGDG color="white" /> : ''}</NavbarBrand>
        <NavbarToggler onClick={toggle} className={["mr-2", styles.toggler_btn, isScrolling ? styles.shadow_scrolling : ''].join(' ')}><LogoMenu color={isScrolling ? "white" : "rgba(0,0,0,.55)"} /></NavbarToggler>
        <Collapse className={[styles.collapse_menu, isOpen ? styles.opened_menu : ""].join(' ')} isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            {menu.map((menuItems, index) =>
              <NavItem key={"nav-item-" + index}>
                <NavLink className={isScrolling ? [styles.nav_link, styles.shadow_scrolling].join(' ') : styles.nav_link} style={{ color: isScrolling || isOpen ? 'white' : 'rgba(0,0,0,.55)' }} href={menuItems.ref}>{menuItems.name}</NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarHome;