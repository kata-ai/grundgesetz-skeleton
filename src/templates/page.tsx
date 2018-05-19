import * as React from 'react';
import Link from 'gatsby-link';

import Page from '../components/Page';
import Container from '../components/Container';
import getPageById from '../utils/getPageById';
import { MenuNode } from '../interfaces/nodes';

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
  const { markdownRemark, sectionList } = data;
  const { prev, next } = markdownRemark.frontmatter;
  const prevPage = getPageById(sectionList.edges, prev);
  const nextPage = getPageById(sectionList.edges, next);

  return (
    <Page>
      <Container>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <section>
          {prevPage && (
            <>
              Previous Page: <Link to={prevPage.slug}>{prevPage.title}</Link>
            </>
          )}
          {nextPage && (
            <>
              Next Page: <Link to={nextPage.slug}>{nextPage.title}</Link>
            </>
          )}
        </section>
      </Container>
    </Page>
  );
};

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
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
    sectionList: allTocJson {
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
