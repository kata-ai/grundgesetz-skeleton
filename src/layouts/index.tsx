import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import { WindowLocation } from '@reach/router';

import { LayoutRoot } from 'components/layout/LayoutRoot';
import { LayoutMain } from 'components/layout/LayoutMain';
import { Navigation } from 'components/layout/Navigation';
import { Overlay } from 'components/layout/Overlay';

import { MenuNode, Edge } from 'interfaces/nodes';
import { SiteMetadata } from 'interfaces/gatsby';

import 'prism-themes/themes/prism-atom-dark.css';

interface IndexLayoutProps {
  location?: WindowLocation;
}

interface DataProps {
  site: {
    siteMetadata: SiteMetadata;
  };
  navigationMenus: {
    edges: Edge<MenuNode>[];
  };
}

const IndexLayout: React.FC<IndexLayoutProps> = ({ location, children }) => {
  return (
    <StaticQuery query={query}>
      {(data: DataProps) => {
        const { siteMetadata } = data.site;

        return (
          <LayoutRoot>
            <Helmet>
              <title>{siteMetadata.title}</title>
              <meta name="description" content={siteMetadata.description} />
              <meta name="keywords" content={siteMetadata.keywords} />
              <meta property="og:type" content="website" />
              <meta property="og:site_name" content={siteMetadata.title} />
              <meta property="og:description" content={siteMetadata.description} />
              <meta property="og:url" content={`${siteMetadata.siteUrl}${location ? location.pathname : '/'}`} />
            </Helmet>
            <Navigation
              title={siteMetadata.sidebarTitle || siteMetadata.title}
              navigation={data.navigationMenus.edges}
            />
            <Overlay />
            <LayoutMain title={siteMetadata.sidebarTitle || siteMetadata.title}>{children}</LayoutMain>
          </LayoutRoot>
        );
      }}
    </StaticQuery>
  );
};

export default IndexLayout;

const query = graphql`
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
