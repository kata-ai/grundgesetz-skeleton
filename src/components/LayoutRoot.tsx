import * as React from 'react';
import styled from '../utils/styled';

import 'normalize.css';
import '../styles/normalize';
import 'prism-themes/themes/prism-a11y-dark.css';

const StyledLayoutRoot = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: ${props => props.theme.breakpoints.sm}px) {
    flex-direction: row;
  }
`;

interface LayoutRootProps {
  className?: string;
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
  <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
);

export default LayoutRoot;
