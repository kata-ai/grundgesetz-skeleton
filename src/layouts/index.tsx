import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import LayoutRoot from 'components/LayoutRoot';
import LayoutMain from 'components/LayoutMain';
import theme from 'styles/theme';
import { ThemeProvider } from 'utils/styled';
import { MenuNode } from 'interfaces/nodes';
import { SiteMetadata } from 'interfaces/gatsby';
import { RouteComponentProps } from 'react-router';

import 'styles/globals';
import 'prism-themes/themes/prism-a11y-dark.css';
import NavButton from 'components/NavButton';
import MobileHeader from 'components/MobileHeader';
import Overlay from 'components/Overlay';

interface WrapperProps extends RouteComponentProps<{}> {
  children: () => any;
  data: {
    site: {
      siteMetadata: SiteMetadata;
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
    const { children, data, location } = this.props;
    const { siteMetadata } = data.site;
    const { drawerIsOpen } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <LayoutRoot>
          <Helmet>
            <title>{siteMetadata.title}</title>
            <meta name="description" content={siteMetadata.description} />
            <meta name="keywords" content={siteMetadata.keywords} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteMetadata.title} />
            <meta property="og:description" content={siteMetadata.description} />
            <meta property="og:url" content={`${siteMetadata.siteUrl}${location.pathname}`} />
          </Helmet>
          <Navigation
            title={siteMetadata.sidebarTitle || siteMetadata.title}
            navigation={data.navigationMenus.edges}
            open={drawerIsOpen}
            onCloseNavMenu={this.closeDrawer}
            toggleDrawer={this.toggleDrawer}
          />
          <Overlay visible={drawerIsOpen} onClick={this.closeDrawer} />{' '}
          <MobileHeader>
            <NavButton onClick={this.toggleDrawer} drawerIsOpen={drawerIsOpen} />
          </MobileHeader>
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
        sidebarTitle
        description
        siteUrl
        keywords
        author {
          name
          url
          email
        }
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
