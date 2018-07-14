import React from 'react';
import Link from 'gatsby-link';
import { MenuNode } from 'interfaces/nodes';
import styled from 'utils/styled';

interface NavigationMenuProps {
  node: MenuNode;
  menuKey: string;
  isOpen?: boolean;
  onClick?: (e: React.MouseEvent<any>) => void;
  onCloseNavMenu?: (e: React.MouseEvent<any>) => void;
}

interface ToggleableProps {
  isOpen?: boolean;
}

const Root = styled('div')`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const ToggleButton = styled<ToggleableProps, 'button'>('button')`
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

const ToggleButtonInner = styled<ToggleableProps, 'div'>('div')`
  display: flex;
  flex-direction: row;
  align-items: center;

  & svg {
    g {
      fill: #949a9d;
    }
  }
`;

const ToggleButtonSpan = styled('span')`
  flex: 1 1 auto;
  font-weight: 500;
`;

const ToggleMenu = styled<ToggleableProps, 'ul'>('ul')`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  max-height: ${props => !props.isOpen && 0};
  list-style-type: none;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;
`;

const ToggleMenuList = styled('li')`
  margin: 0.5rem 0;
  font-size: 85%;
  color: ${props => props.theme.colors.gray.calm};
`;

const ToggleMenuListLink = styled(Link)`
  display: block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${props => props.theme.colors.gray.calm};

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &.active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.brand};
  }
`;

class NavigationMenu extends React.PureComponent<NavigationMenuProps, ToggleableProps> {
  render() {
    const { node, onCloseNavMenu, onClick, isOpen } = this.props;

    return (
      <Root>
        <ToggleButton onClick={onClick} isOpen={isOpen}>
          <ToggleButtonInner isOpen={isOpen}>
            <ToggleButtonSpan>{node.title}</ToggleButtonSpan>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10px"
                height="6px"
                viewBox="0 0 10 6"
                version="1.1"
              >
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  {/* tslint:disable:max-line-length */}
                  <path
                    d="M5.00025,6.00025 C4.74425,6.00025 4.48825,5.90225 4.29325,5.70725 L0.29325,1.70725 C-0.09775,1.31625 -0.09775,0.68425 0.29325,0.29325 C0.68425,-0.09775 1.31625,-0.09775 1.70725,0.29325 L5.00025,3.58625 L8.29325,0.29325 C8.68425,-0.09775 9.31625,-0.09775 9.70725,0.29325 C10.09825,0.68425 10.09825,1.31625 9.70725,1.70725 L5.70725,5.70725 C5.51225,5.90225 5.25625,6.00025 5.00025,6.00025"
                    transform="translate(5.000250, 3.000125) scale(1, -1) translate(-5.000250, -3.000125) "
                  />
                  {/* tslint:enable:max-line-length */}
                </g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="6px" viewBox="0 0 10 6">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  {/* tslint:disable:max-line-length */}
                  <path d="M5.00025,6.00025 C4.74425,6.00025 4.48825,5.90225 4.29325,5.70725 L0.29325,1.70725 C-0.09775,1.31625 -0.09775,0.68425 0.29325,0.29325 C0.68425,-0.09775 1.31625,-0.09775 1.70725,0.29325 L5.00025,3.58625 L8.29325,0.29325 C8.68425,-0.09775 9.31625,-0.09775 9.70725,0.29325 C10.09825,0.68425 10.09825,1.31625 9.70725,1.70725 L5.70725,5.70725 C5.51225,5.90225 5.25625,6.00025 5.00025,6.00025" />
                  {/* tslint:enable:max-line-length */}
                </g>
              </svg>
            )}
          </ToggleButtonInner>
        </ToggleButton>
        <ToggleMenu isOpen={isOpen}>
          {node.items.map(item => (
            <ToggleMenuList key={item.id}>
              <ToggleMenuListLink to={item.slug} activeClassName="active" onClick={onCloseNavMenu}>
                {item.title}
              </ToggleMenuListLink>
            </ToggleMenuList>
          ))}
        </ToggleMenu>
      </Root>
    );
  }
}

export default NavigationMenu;
