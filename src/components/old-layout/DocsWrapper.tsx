import styled from 'utils/styled';

const DocsWrapper = styled('article')`
  display: block;
  flex: 1 1 auto;
  position: relative;
  padding: ${props => props.theme.dimensions.containerPadding}rem;
  padding-bottom: 3rem;
`;

export default DocsWrapper;
