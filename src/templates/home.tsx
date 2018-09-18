import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

import Page from 'components/Page';
import Container from 'components/Container';
import { MenuNode } from 'interfaces/nodes';
import MarkdownContent from 'components/MarkdownContent';
import DocsWrapper from 'components/DocsWrapper';
import DocsHeader from 'components/DocsHeader';
import FooterWrapper from 'components/FooterWrapper';
import Footer from 'components/Footer';

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
      edges: Array<{
        node: MenuNode;
      }>;
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
