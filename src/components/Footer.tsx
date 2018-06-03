import React from 'react';
import styled from 'utils/styled';
import Container from './Container';
import { breakpoints } from 'styles/variables';

const Wrapper = styled('footer')`
  padding: ${props => props.theme.dimensions.containerPadding}rem;
  background-color: ${props => props.theme.colors.ui.bright};

  @media (max-width: ${breakpoints.lg - 1}px) {
    padding-bottom: 5rem;
  }
`;

const Footer: React.SFC = () => (
  <Wrapper>
    <Container>
      Created with{' '}
      <a
        href="https://github.com/kata-ai/grundgesetz-skeleton"
        target="_blank"
        rel="noopener noreferrer"
      >
        Grundgesetz
      </a>.
    </Container>
  </Wrapper>
);

export default Footer;
