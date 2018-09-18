import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

import Page from 'components/Page';
import Container from 'components/Container';
import getPageById from 'utils/getPageById';
import { MenuNode } from 'interfaces/nodes';
import { SiteMetadata } from 'interfaces/gatsby';
import MarkdownContent from 'components/MarkdownContent';
import DocsWrapper from 'components/DocsWrapper';
import DocsHeader from 'components/DocsHeader';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';
import FooterWrapper from 'components/FooterWrapper';

interface PageTemplateProps extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
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
  const { markdownRemark, sectionList, site } = data;
  const { prev, next } = markdownRemark.frontmatter;
  const prevPage = getPageById(sectionList.edges, prev);
  const nextPage = getPageById(sectionList.edges, next);

  return (
    <Page docsPage>
      <Helmet>
        <title>
          {markdownRemark.frontmatter.title} &middot; {site.siteMetadata.title}
        </title>
        <meta name="description" content={markdownRemark.excerpt} />
        <meta property="og:title" content={markdownRemark.frontmatter.title} />
        <meta property="og:description" content={markdownRemark.excerpt} />
      </Helmet>
      <DocsWrapper>
        <Container>
          <DocsHeader>
            <h1>{markdownRemark.frontmatter.title}</h1>
          </DocsHeader>
          <MarkdownContent html={markdownRemark.html} />
        </Container>
      </DocsWrapper>
      <FooterWrapper>
        <Container>
          {(prevPage || nextPage) && <Pagination prevPage={prevPage} nextPage={nextPage} />}
          <Footer />
        </Container>
      </FooterWrapper>
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
        siteUrl
        keywords
        author {
          name
          url
          email
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
