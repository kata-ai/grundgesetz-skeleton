import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Page from 'components/old-layout/Page';
import NotFoundWrapper from 'components/old-layout/NotFoundWrapper';
import styled from 'utils/styled';
import { SiteMetadata } from 'interfaces/gatsby';
import { RouteComponentProps } from '@reach/router';
import { Heading, Text } from 'components/foundations';

interface Props extends RouteComponentProps {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
  };
}

const NotFoundPage: React.SFC<Props> = ({ data }) => (
  <Page>
    <Helmet>
      <title>404: Page not found. &middot; {data.site.siteMetadata.title}</title>
    </Helmet>
    <NotFoundWrapper>
      <Inner>
        <Heading as="h1" size={800} color="grey09" m={0}>
          404
        </Heading>
        <Text as="p" size={400} color="grey07">
          We can't find the page you're looking for.
        </Text>
        <Text as="p" size={400} color="grey07">
          <Link to="/">Go back?</Link>
        </Text>
      </Inner>
    </NotFoundWrapper>
  </Page>
);

export default NotFoundPage;

export const query = graphql`
  query NotFoundPageQuery {
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
  }
`;

const Inner = styled('div')`
  text-align: center;
`;
