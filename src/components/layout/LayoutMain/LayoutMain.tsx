import React from 'react';
import { styledWrapper as styled, dimensions, breakpoints, colors } from 'utils';
import { NavigationContext, NavigationActionTypes } from '../Navigation/NavigationContext';
import { Header, HeaderInner } from '../Header';
import { Link } from 'gatsby';
import { determineFontDimensions } from 'components/foundations';
import { NavButton } from '../Navigation';

interface LayoutMainProps {
  className?: string;
  isNavigationOpen?: boolean;
}

interface TitleableProps extends LayoutMainProps {
  title: string;
}

interface FontSizeProps {
  size: ReturnType<typeof determineFontDimensions>;
}

const StyledLayoutMain = styled('div')<LayoutMainProps>`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  position: relative;
  transition: margin-left 0.3s ease;

  @media (min-width: ${breakpoints.lg}px) {
    margin-left: ${dimensions.widths.sidebar.lg}px;
  }
`;

const LogoWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 0 24px;
`;

const HomepageLink = styled(Link)<FontSizeProps>`
  color: ${colors.grey09};
  font-size: ${props => props.size.fontSize};
  font-size: ${props => props.size.lineHeight};
  font-weight: ${props => props.size.fontWeight};

  &:hover,
  &:focus {
    color: ${colors.grey09};
    text-decoration: none;
  }
`;

const LayoutMain: React.SFC<TitleableProps> = ({ children, title, className }) => {
  const { state, dispatch } = React.useContext(NavigationContext);

  return (
    <StyledLayoutMain className={className} isNavigationOpen={state.isOpen}>
      <Header fixed>
        <HeaderInner hideOnDesktop>
          <NavButton
            icon="hamburger"
            fill={colors.grey05}
            onClick={() => dispatch({ type: NavigationActionTypes.TOGGLE_DRAWER })}
          >
            Toggle Drawer
          </NavButton>
          <LogoWrapper>
            <HomepageLink
              to="/"
              size={determineFontDimensions('heading', 400)}
              onClick={() => dispatch({ type: NavigationActionTypes.TOGGLE_DRAWER })}
            >
              {title}
            </HomepageLink>
          </LogoWrapper>
        </HeaderInner>
      </Header>
      {children}
    </StyledLayoutMain>
  );
};

export default LayoutMain;
