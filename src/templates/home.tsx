import React from 'react';

import Page from 'components/Page';
import Container from 'components/Container';
import { MenuNode } from 'interfaces/nodes';
import MarkdownContent from 'components/MarkdownContent';
import DocsWrapper from 'components/DocsWrapper';
import DocsHeader from 'components/DocsHeader';

interface PageTemplateProps {
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
      <DocsWrapper>
        <Container>
          <DocsHeader>
            <h1>Welcome to Grundgesetz!</h1>
          </DocsHeader>
          <MarkdownContent html={markdownRemark.html} />
        </Container>
      </DocsWrapper>
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
        author {
          name
          url
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
