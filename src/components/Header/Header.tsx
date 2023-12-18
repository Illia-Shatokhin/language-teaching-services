import { FC, ReactElement } from 'react';
import {
  // HeaderContainer,
  // Navigation,
  // StyledLink,
  // IconWrapper,
  HeaderWrapper,
  LogoLink,
  LogoIcon,
  LogoText,
} from './Header.styled';
import sprite from 'assets/sprite.svg';
import { Link } from 'react-router-dom';

const Header: FC = (): ReactElement => {
  return (
    <>
      {/* <HeaderContainer>
        <Navigation>
          <StyledLink to="/home">
            <IconWrapper>
              <use href={`${sprite}#icon-logo`} />
            </IconWrapper>
            Home
          </StyledLink>
          <StyledLink to="/teachers">
            <IconWrapper>
              <use href={`${sprite}#icon-logo`} />
            </IconWrapper>
            Teachers
          </StyledLink>
          <StyledLink to="/favorites">
            <IconWrapper>
              <use href={`${sprite}#icon-logo`} />
            </IconWrapper>
            Favorites
          </StyledLink>
        </Navigation>
      </HeaderContainer> */}
      <HeaderWrapper>
        <LogoLink to="/home">
          <LogoIcon>
            <use href={`${sprite}#icon-ukraine`} />
          </LogoIcon>
          <LogoText>LearnLingo</LogoText>
        </LogoLink>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/teachers">Teachers</Link>
        </nav>
        <div>
          <button type="button">
            <svg width="28" height="28">
              <use href={`${sprite}#icon-login`} />
            </svg>
            Log in
          </button>
          <button type="button">Registration</button>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
