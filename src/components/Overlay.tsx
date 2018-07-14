import styled from 'utils/styled';
import { transparentize } from 'polished';

interface OverlayProps {
  visible?: boolean;
}

const Overlay = styled<OverlayProps, 'div'>('div')`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${props => transparentize(0.25, props.theme.colors.black)};
  z-index: ${props => props.theme.zIndex.overlay};
  opacity: ${props => (props.visible ? 1 : 0)};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
`;

export default Overlay;
