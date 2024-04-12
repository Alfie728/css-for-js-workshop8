/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { CSSTransition, Transition } from 'react-transition-group';
import './animationStyles.css';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, setShowMobileMenu }) => {
  const nodeRef = useRef(null);

  return (
    <AnimationWrapper
      nodeRef={nodeRef}
      in={isOpen}
      timeout={200}
      classNames="fade"
      unmountOnExit
      onEnter={() => setShowMobileMenu(true)}
      onExited={() => setShowMobileMenu(false)}
    >
      <Wrapper dismissible ref={nodeRef}>
        <Backdrop />
        <Content aria-label="Menu">
          <InnerWrapper>
            <CloseButton onClick={() => setShowMobileMenu(false)}>
              <Icon id="close" />
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
            </CloseButton>
            <Filler />
            <Nav>
              <NavLink href="/sale">Sale</NavLink>
              <NavLink href="/new">New&nbsp;Releases</NavLink>
              <NavLink href="/men">Men</NavLink>
              <NavLink href="/women">Women</NavLink>
              <NavLink href="/kids">Kids</NavLink>
              <NavLink href="/collections">Collections</NavLink>
            </Nav>
            <Footer>
              <SubLink href="/terms">Terms and Conditions</SubLink>
              <SubLink href="/privacy">Privacy Policy</SubLink>
              <SubLink href="/contact">Contact Us</SubLink>
            </Footer>
          </InnerWrapper>
        </Content>
      </Wrapper>
    </AnimationWrapper>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%)
  }
  to {
    transform: translateX(0);
  }
`;
const AnimationWrapper = styled(CSSTransition)`
  will-change: opacity;
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  inset: 0;
  position: absolute;
  background: var(--color-backdrop);
  animation: ${fadeIn} 500ms;
  will-change: opacity;
`;

const Content = styled(DialogContent)`
  --overfill: 16px;
  position: relative;
  background: white;
  width: calc(300px + var(--overfill) * 2);
  height: 100%;
  margin-right: calc(var(--overfill) * -1);
  padding: 24px 32px;
  will-change: transform;

  animation: ${slideIn} 600ms both cubic-bezier(0.17, 0.67, 0.3, 1.17);
  animation-delay: 300ms;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  will-change: opacity;

  animation: ${fadeIn} 400ms both;
  animation-delay: 600ms;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: var(--overfill);
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
