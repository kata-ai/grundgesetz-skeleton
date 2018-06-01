import * as React from 'react';
import Helmet from 'react-helmet';

import Navigation from 'components/Navigation';
import LayoutRoot from 'components/LayoutRoot';
import LayoutMain from 'components/LayoutMain';
import theme from 'styles/theme';
import { ThemeProvider } from 'utils/styled';
import { MenuNode } from 'interfaces/nodes';

import 'styles/globals';
import 'prism-themes/themes/prism-a11y-dark.css';
import FloatingNavButton from 'components/FloatingNavButton';

interface WrapperProps {
  children: () => any;
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
    navigationMenus: {
      edges: Array<{
        node: MenuNode;
      }>;
    };
  };
}

interface WrapperState {
  drawerIsOpen: boolean;
}

class IndexLayout extends React.Component<WrapperProps, WrapperState> {
  constructor(props: WrapperProps) {
    super(props);

    this.state = {
      drawerIsOpen: false
    };
  }

  render() {
    const { children, data } = this.props;
    const { drawerIsOpen } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <LayoutRoot>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: 'gatsbyjs, gatsby, javascript, sample, something' }
            ]}
          />
          <Navigation
            title={data.site.siteMetadata.title}
            navigation={data.navigationMenus.edges}
            open={drawerIsOpen}
            onCloseNavMenu={this.closeDrawer}
          />
          <FloatingNavButton onClick={this.toggleDrawer} drawerIsOpen={drawerIsOpen} />
          <LayoutMain>{children()}</LayoutMain>
        </LayoutRoot>
      </ThemeProvider>
    );
  }

  private toggleDrawer = () => {
    this.setState({ drawerIsOpen: !this.state.drawerIsOpen });
  };

  private closeDrawer = () => {
    this.setState({ drawerIsOpen: false });
  };
}

export default IndexLayout;

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    navigationMenus: allTocJson {
      edges {
        node {
          title
          items {
            id
            slug
            title
          }
        }
      }
    }
  }
`;
