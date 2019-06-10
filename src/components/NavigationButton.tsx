import styled from 'utils/styled';

interface NavigationButtonProps {
  visible?: boolean;
}

const NavigationButton = styled('button')<NavigationButtonProps>`
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
`;

export default NavigationButton;
