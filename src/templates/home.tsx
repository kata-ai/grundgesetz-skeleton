import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

import Page from 'components/old-layout/Page';
import Container from 'components/old-layout/Container';
import { MenuNode, Edge } from 'interfaces/nodes';
import MarkdownContent from 'components/old-layout/MarkdownContent';
import DocsWrapper from 'components/old-layout/DocsWrapper';
import DocsHeader from 'components/old-layout/DocsHeader';
import FooterWrapper from 'components/old-layout/FooterWrapper';
import Footer from 'components/old-layout/Footer';

interface PageTemplateProps extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
    sectionList: {
      edges: Edge<MenuNode>[];
    };
    markdownRemark: {
      html: string;
      excerpt: string;
      frontmatter: {
        id: string;
        title: string;
        prev?: string;
        next?: string;
      };
    };
  };
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => {
  const { markdownRemark } = data;

  return (
    <Page docsPage>
      <Helmet>
        <meta property="og:title" content="Home" />
      </Helmet>
      <DocsWrapper>
        <Container>
          <DocsHeader>
            <h1>Welcome to Grundgesetz!</h1>
          </DocsHeader>
          <MarkdownContent html={markdownRemark.html} />
        </Container>
      </DocsWrapper>
      <FooterWrapper>
        <Container>
          <Footer />
        </Container>
      </FooterWrapper>
    </Page>
  );
};

export default PageTemplate;

export const query = graphql`
  query HomeTemplateQuery($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        id
        title
        prev
        next
      }
    }
  }
`;
