import React from 'react';
import styled from 'utils/styled';
import { MenuNode } from 'interfaces/nodes';
import NavigationMenu from './NavigationMenu';

interface Props {
  navigation?: Array<{ node: MenuNode }>;
  onCloseNavMenu?: (e: React.MouseEvent<HTMLElement>) => void;
}

class DocumentationNavMenus extends React.Component<Props> {
  render() {
    const { navigation, onCloseNavMenu } = this.props;

    return (
      <Wrapper>
        {navigation &&
          navigation.map(({ node }) => (
            <NavigationMenu key={node.title} node={node} onCloseNavMenu={onCloseNavMenu} />
          ))}
      </Wrapper>
    );
  }
}

export default DocumentationNavMenus;

const Wrapper = styled('div')`
  padding: 0 ${props => props.theme.dimensions.containerPadding}rem;
  transition: all 0.3s ease;
`;
