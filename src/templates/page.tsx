import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

import { getPageById } from 'utils/helpers';
import { MenuNode, Edge } from 'interfaces/nodes';
import { SiteMetadata } from 'interfaces/gatsby';

import { Page } from 'components/layout/Page';
import { Container } from 'components/layout/Container';
import { DocsWrapper } from 'components/docs/DocsWrapper';
import { DocsHeader } from 'components/docs/DocsHeader';
import { MarkdownContent } from 'components/page/Markdown';

import { renderAst } from 'utils';
import { FooterWrapper, Footer } from 'components/layout/Footer';
import { Pagination } from 'components/ui/Pagination';

interface PageTemplateProps extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    sectionList: {
      edges: Edge<MenuNode>[];
    };
    markdownRemark: {
      htmlAst: any;
      excerpt: string;
      frontmatter: {
        id: string;
        title: string;
        description?: string;
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
          <DocsHeader title={markdownRemark.frontmatter.title} subtitle={markdownRemark.frontmatter.description} />
          <MarkdownContent>{renderAst(markdownRemark.htmlAst)}</MarkdownContent>
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
      htmlAst
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
