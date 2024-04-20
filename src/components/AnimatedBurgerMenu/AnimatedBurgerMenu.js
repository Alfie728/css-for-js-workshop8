import React, { useState } from 'react';
import styled from 'styled-components';
import './styles.css';
import { QUERIES, WEIGHTS } from '../../constants';
const AnimatedBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuWrapper onClick={handleMenuOpen} className={isOpen ? 'open' : ''}>
      <MenuCircle />
      <MenuLink href="#">
        <MenuIcon>
          <MenuLine1 />
          <MenuLine2 />
          <MenuLine3 />
        </MenuIcon>
      </MenuLink>
      <MenuOverlay className={isOpen ? 'open' : ''}>
        <InnerWrapper>
          <Filler />
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Filler />
          <Footer>
            <SubLink href="/terms">Terms and Conditions</SubLink>
            <SubLink href="/privacy">Privacy Policy</SubLink>
            <SubLink href="/contact">Contact Us</SubLink>
          </Footer>
        </InnerWrapper>
      </MenuOverlay>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  position: absolute;
  height: 46px;
  width: 46px;
  right: 16px;
  top: 17px;
  /* isolation: isolate; */
  @media ${QUERIES.phoneAndSmaller} {
    right: 4px;
  }
`;

const MenuCircle = styled.span`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1001;

  ${MenuWrapper}.open & {
    transform: scale(80);
    background-color: #fff;
    transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

const MenuLink = styled.a`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1002;
`;

const MenuIcon = styled.span`
  position: absolute;
  width: 20px;
  height: 14px;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 1px;
`;

const MenuLine = styled.span`
  background-color: #333;
  height: 2px;
  width: 100%;
  border-radius: 2px;
  position: absolute;
  left: 0;
  transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const MenuLine1 = styled(MenuLine)`
  top: 0;

  ${MenuWrapper}.open & {
    transform: translateY(7px) translateY(-50%) rotate(-135deg);
  }
`;

const MenuLine2 = styled(MenuLine)`
  top: 0;
  bottom: 0;
  margin: auto;

  ${MenuWrapper}.open & {
    opacity: 0;
  }
`;

const MenuLine3 = styled(MenuLine)`
  bottom: 0;
  ${MenuWrapper}.open & {
    transform: translateY(-7px) translateY(50%) rotate(135deg);
  }
`;

const MenuOverlay = styled.div`
  background-color: #fff;
  color: #333;
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  opacity: 0;
  visibility: hidden;
  text-align: center;
  transition: opacity 0.2s ease-in-out;
  z-index: 1001;

  &.open {
    opacity: 1;
    visibility: visible;
    transition: opacity 1s ease-in-out;
    transition-delay: 0.1s;
  }
`;

const InnerWrapper = styled.nav`
  width: 40%;
  margin: 0 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const Nav = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
  &:hover {
    color: var(--color-secondary);
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

const Filler = styled.div`
  flex: 1;
`;
export default AnimatedBurgerMenu;
