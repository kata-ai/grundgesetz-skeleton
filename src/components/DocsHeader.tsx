import styled from 'utils/styled';

const DocsHeader = styled('header')`
  margin-bottom: 1rem;

  h1 {
    margin: 0;
    font-weight: 600;
    font-size: ${props => props.theme.dimensions.headingSizes.h1}rem;
    color: ${props => props.theme.colors.ink};
    line-height: ${props => props.theme.dimensions.lineHeight.heading};
  }
`;

export default DocsHeader;
