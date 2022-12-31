import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import navbarItems from "./navbarData";
const Navbar = () => {
  return (
    <Header>
      <NavbarContainer>
        <MenuContainer>
          {navbarItems.map((item) => {
            return (
              <>
                <MenuItemStyle>
                  <Link to={item.link}>{item.title}</Link>
                </MenuItemStyle>
              </>
            );
          })}
        </MenuContainer>
      </NavbarContainer>
    </Header>
  );
};
const Header = styled.header``;

const NavbarContainer = styled.nav`
  width: 100vw;
  height: 10vh;
  padding-top: 30px;

  display: flex;
  justify-content: center;
`;
const MenuContainer = styled.div`
  width: 40vw;
  height: 10vh;

  display: flex;
  justify-content: space-around;
`;
const MenuItemStyle = styled.div`
  font-size: 40px;
  &:hover {
    transform: scale(1.1);
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export default Navbar;
