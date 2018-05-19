import * as React from 'react';
import styled from '../utils/styled';

const StyledPage = styled('div')`
  display: block;
  flex: 1 1 auto;
  position: relative;
  padding: 0;
`;

interface PageProps {
  className?: string;
}

const Page: React.SFC<PageProps> = ({ children, className }) => (
  <StyledPage className={className}>{children}</StyledPage>
);

export default Page;
