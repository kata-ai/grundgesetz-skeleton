import * as React from 'react';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation';
import LayoutRoot from '../components/LayoutRoot';
import LayoutMain from '../components/LayoutMain';
import theme from '../styles/theme';
import { ThemeProvider } from '../utils/styled';
import { MenuNode } from '../interfaces/nodes';

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

const IndexLayout: React.SFC<WrapperProps> = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <LayoutRoot>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: 'gatsbyjs, gatsby, javascript, sample, something' }
        ]}
      />
      <Navigation title={data.site.siteMetadata.title} navigation={data.navigationMenus.edges} />
      <LayoutMain>{children()}</LayoutMain>
    </LayoutRoot>
  </ThemeProvider>
);

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
