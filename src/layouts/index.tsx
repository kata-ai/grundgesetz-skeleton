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
import FloatingNavButton from 'components/FloatingNavButton';
import Footer from 'components/Footer';

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
    const { drawerIsOpen } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <LayoutRoot>
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}${location.pathname}`} />
            <meta name="description" content={data.site.siteMetadata.description} />
            <meta name="keywords" content={data.site.siteMetadata.keywords} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={data.site.siteMetadata.title} />
            <meta property="og:description" content={data.site.siteMetadata.description} />
            <meta
              property="og:url"
              content={`${data.site.siteMetadata.siteUrl}${location.pathname}`}
            />
          </Helmet>
          <Navigation
            title={data.site.siteMetadata.title}
            navigation={data.navigationMenus.edges}
            open={drawerIsOpen}
            onCloseNavMenu={this.closeDrawer}
          />
          <FloatingNavButton onClick={this.toggleDrawer} drawerIsOpen={drawerIsOpen} />
          <LayoutMain>
            {children()}
            <Footer />
          </LayoutMain>
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
