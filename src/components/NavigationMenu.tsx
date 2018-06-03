import React from 'react';
import Link from 'gatsby-link';
import { MenuNode } from 'interfaces/nodes';
import styled from 'utils/styled';

interface NavigationMenuProps {
  node: MenuNode;
  onCloseNavMenu?: (e: React.MouseEvent<any>) => void;
}

interface NavigationMenuState {
  isOpen: boolean;
}

const Root = styled('div')`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const ToggleButton = styled<NavigationMenuState, 'button'>('button')`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0.75rem;
  border: none;
  background: none;
  outline: none;
  font-size: 85%;
  text-align: left;
  border: 1px solid #d3e3ef;
  border-radius: 2px;
  background-color: ${props => props.theme.colors.white};
  opacity: ${props => (props.isOpen ? 1 : 0.5)};
  box-shadow: ${props => (props.isOpen ? '0 2px 4px 0 rgba(0, 0, 0, 0.15)' : 'none')};
  transition: all 0.3s ease;
`;

const ToggleButtonInner = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ToggleButtonSpan = styled('span')`
  flex: 1 1 auto;
  font-weight: 500;
`;

const ToggleMenu = styled<NavigationMenuState, 'ul'>('ul')`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  max-height: ${props => !props.isOpen && 0};
  list-style-type: none;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;
`;

const ToggleMenuList = styled('li')`
  margin: 0.5rem 0.75rem;
  font-size: 85%;
  color: ${props => props.theme.colors.gray.calm};
`;

class NavigationMenu extends React.PureComponent<NavigationMenuProps, NavigationMenuState> {
  constructor(props: NavigationMenuProps) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    const { node, onCloseNavMenu } = this.props;
    const { isOpen } = this.state;

    return (
      <Root>
        <ToggleButton onClick={this.toggleNavMenu} isOpen={isOpen}>
          <ToggleButtonInner>
            <ToggleButtonSpan>{node.title}</ToggleButtonSpan>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="2" viewBox="0 0 16 2">
                <rect
                  width="16"
                  height="2"
                  x="280"
                  y="23"
                  fill="#949A9D"
                  fill-rule="evenodd"
                  rx="1"
                  transform="translate(-280 -23)"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path
                  fill="#949A9D"
                  fill-rule="evenodd"
                  d="M7 7V1a1 1 0 1 1 2 0v6h6a1 1 0 0 1 0 2H9v6a1 1 0 0 1-2 0V9H1a1 1 0 1 1 0-2h6z"
                />
              </svg>
            )}
          </ToggleButtonInner>
        </ToggleButton>
        <ToggleMenu isOpen={isOpen}>
          {node.items.map(item => (
            <ToggleMenuList key={item.id}>
              <Link to={item.slug} onClick={onCloseNavMenu}>
                {item.title}
              </Link>
            </ToggleMenuList>
          ))}
        </ToggleMenu>
      </Root>
    );
  }

  private toggleNavMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };
}

export default NavigationMenu;
