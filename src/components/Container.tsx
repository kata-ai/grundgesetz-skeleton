import styled from 'utils/styled';

import { widths } from 'styles/variables';
import { getEmSize } from 'styles/mixins';

const Container = styled('div')`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getEmSize(widths.md)}em;
`;

export default Container;
