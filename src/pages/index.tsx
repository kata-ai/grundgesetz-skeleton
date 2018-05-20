import * as React from 'react';
import Link from 'gatsby-link';

import Page from 'components/Page';
import Container from 'components/Container';

const IndexPage = () => (
  <Page>
    <Container>
      <h1>Welcome to Grundgesetz!</h1>
      <p>
        This is the index page to your docs, and it lives inside your <code>index.tsx</code> file.
        Go ahead and edit it!
      </p>
      <Link to="/overview/about/" href="/overview/about/">
        Go to documentation.
      </Link>
    </Container>
  </Page>
);

export default IndexPage;
