import * as React from 'react';
import Link from 'gatsby-link';

import styled from 'utils/styled';
import Container from './Container';
import { MenuNode } from 'interfaces/nodes';

const Wrapper = styled<{ isOpen?: boolean }, 'header'>('header')`
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
  background-color: ${props => props.theme.colors.drawer.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: ${props => props.theme.breakpoints.lg - 1}px) {
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    width: ${props => props.theme.widths.drawer.lg}px;
    z-index: 2;
    height: 100vh;
    padding-bottom: 5rem;
    overflow-y: auto;
    pointer-events: auto;
    transform: translate(${props => (props.isOpen ? '0' : '-100%')}, 0);
    transition: transform 0.3s ease;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    flex: 0 0 ${props => props.theme.widths.drawer.lg}px;
    box-shadow: none;
    border-bottom: none;
    border-right: 1px solid ${props => props.theme.colors.drawer.border};
  }
`;

const WrapperInner = styled('div')`
  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    position: fixed;
    width: ${props => props.theme.widths.drawer.lg - 1}px;
    flex: 1 1 auto;
    z-index: 2;
    height: 100vh;
    overflow-y: auto;
  }
`;

const TitleInner = styled('div')`
  padding: 1rem ${props => props.theme.dimensions.containerPadding}rem;
  color: ${props => props.theme.colors.gray.copy};
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

const DocumentationNavMenus = styled<{ isOpen?: boolean }, 'div'>('div')`
  padding: 0 ${props => props.theme.dimensions.containerPadding}rem;
`;

interface HeaderProps {
  title: string;
  navigation?: Array<{ node: MenuNode }>;
  open?: boolean;
  onOpenNavMenu?: (e: React.MouseEvent<any>) => void;
  onCloseNavMenu?: (e: React.MouseEvent<any>) => void;
}

class Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }

  render() {
    const { title, navigation, open, onCloseNavMenu } = this.props;

    return (
      <Wrapper isOpen={open}>
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
              <Link to="/" onClick={onCloseNavMenu}>
                Index
              </Link>
              {navigation &&
                navigation.map(({ node }) => (
                  <div key={node.title}>
                    {node.title}
                    <ul>
                      {node.items.map(item => (
                        <li key={item.id}>
                          <Link to={item.slug} onClick={onCloseNavMenu}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </DocumentationNavMenus>
          </DocumentationNav>
        </WrapperInner>
      </Wrapper>
    );
  }
}

export default Header;
