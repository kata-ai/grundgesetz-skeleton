import * as React from 'react';
import { Heading, Box } from 'components/foundations';

const DocsHeader: React.FC = ({ children }) => {
  return (
    <Box as="header" mb="md">
      <Heading as="h1" size={800} color="grey09">
        {children}
      </Heading>
    </Box>
  );
};

export default DocsHeader;
