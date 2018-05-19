import * as React from 'react';
import Link from 'gatsby-link';

import styled from '../utils/styled';
import Container from './Container';
import { MenuNode } from '../interfaces/nodes';
import { brandColors } from '../styles/theme';

const Wrapper = styled('header')`
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
  background-color: ${props => props.theme.colors.drawer.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    flex: 0 0 ${props => props.theme.widths.drawer.sm}px;
    box-shadow: none;
    border-bottom: none;
    border-right: 1px solid ${props => props.theme.colors.drawer.border};
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    flex: 0 0 ${props => props.theme.widths.drawer.lg}px;
  }
`;

const WrapperInner = styled('div')`
  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    position: fixed;
    width: ${props => props.theme.widths.drawer.sm - 1}px;
    flex: 1 1 auto;
    z-index: 2;
    height: 100vh;
    overflow-y: auto;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    width: ${props => props.theme.widths.drawer.lg - 1}px;
  }
`;

const TitleInner = styled('div')`
  padding: 1rem ${props => props.theme.dimensions.containerPadding}rem;
  color: ${props => props.theme.colors.gray.copy};
  text-align: center;
`;

const HomepageLink = styled(Link)`
  color: ${props => props.theme.colors.black};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const DocumentationNav = styled('nav')`
  display: flex;
  flex-direction: column;
`;

const DocumentationNavMenus = styled<{ isOpen?: boolean }, 'div'>('div')``;

const DocumentationNavMenusInner = styled<{ isOpen?: boolean }, 'div'>('div')`
  padding: ${props => props.theme.dimensions.containerPadding}rem;

  @media (max-width: ${props => props.theme.breakpoints.md - 1}px) {
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background-color: rgb(255, 255, 255);
    z-index: 2;
    height: 100vh;
    padding-bottom: 5rem;
    overflow-y: auto;
    pointer-events: auto;
    transition: opacity 0.5s ease;
    opacity: ${props => (props.isOpen ? 1 : 0)};
  }

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    opacity: 1 !important;
    padding-top: 0;
    padding-bottom: 3rem;
  }
`;

const FloatingNavButtonWrapper = styled('div')`
  display: inline-block;
  position: fixed;
  bottom: 44px;
  right: 20px;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.brand};
  cursor: pointer;
  z-index: 3;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.15);

  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    display: none;
  }
`;

const FloatingNavButtonWrapperInner = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
`;

interface HeaderProps {
  title: string;
  navigation?: Array<{ node: MenuNode }>;
}

interface HeaderState {
  open: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    const { title, navigation } = this.props;

    return (
      <Wrapper>
        <WrapperInner>
          <TitleInner>
            <Container>
              <HomepageLink to="/" href="/">
                {title}
              </HomepageLink>
            </Container>
          </TitleInner>
          <DocumentationNav>
            <DocumentationNavMenus>
              <DocumentationNavMenusInner isOpen={this.state.open}>
                <Link to="/" onClick={this.closeNavMenu}>
                  Index
                </Link>
                {navigation &&
                  navigation.map(({ node }) => (
                    <div key={node.title}>
                      {node.title}
                      <ul>
                        {node.items.map(item => (
                          <li key={item.id}>
                            <Link to={item.slug} onClick={this.closeNavMenu}>
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </DocumentationNavMenusInner>
            </DocumentationNavMenus>
            <FloatingNavButtonWrapper onClick={this.openNavMenu} role="button" tabIndex={0}>
              <FloatingNavButtonWrapperInner>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                  <path
                    fill={brandColors.katablue}
                    fillRule="evenodd"
                    d="M7 7V1a1 1 0 1 1 2 0v6h6a1 1 0 0 1 0 2H9v6a1 1 0 0 1-2 0V9H1a1 1 0 1 1 0-2h6z"
                  />
                </svg>
              </FloatingNavButtonWrapperInner>
            </FloatingNavButtonWrapper>
          </DocumentationNav>
        </WrapperInner>
      </Wrapper>
    );
  }

  private openNavMenu = () => {
    this.setState({ open: !this.state.open });
  };

  private closeNavMenu = () => {
    this.setState({ open: false });
  };
}

export default Header;
