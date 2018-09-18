import React from 'react';
import styled from 'utils/styled';
import { MenuNode } from 'interfaces/nodes';
import NavigationMenu from './NavigationMenu';

interface Props {
  navigation?: Array<{ node: MenuNode }>;
  onCloseNavMenu?: (e: React.MouseEvent<HTMLElement>) => void;
}

interface State {
  activeMenuKey?: string;
}

class DocumentationNavMenus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activeMenuKey: undefined
    };
  }

  onNavMenuClick(activeMenuKey: string) {
    this.setState(prevState => {
      if (prevState.activeMenuKey === activeMenuKey) {
        return {
          activeMenuKey: undefined
        };
      }

      return { activeMenuKey };
    });
  }

  render() {
    const { navigation, onCloseNavMenu } = this.props;

    return (
      <Wrapper>
        {navigation &&
          navigation.map(({ node }) => (
            <NavigationMenu
              key={node.title}
              menuKey={node.title}
              node={node}
              isOpen={this.state.activeMenuKey === node.title}
              onClick={() => this.onNavMenuClick(node.title)}
              onCloseNavMenu={onCloseNavMenu}
            />
          ))}
      </Wrapper>
    );
  }
}

export default DocumentationNavMenus;

const Wrapper = styled('div')`
  padding: 0 ${props => props.theme.dimensions.containerPadding}rem;
  font-size: ${props => props.theme.dimensions.fontSize.regular}px;
  line-height: ${props => props.theme.dimensions.lineHeight.regular};
  transition: all 0.3s ease;
`;
