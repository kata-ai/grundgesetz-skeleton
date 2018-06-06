import styled from 'utils/styled';
import { transparentize } from 'polished';

interface OverlayProps {
  visible?: boolean;
}

const Overlay = styled<OverlayProps, 'div'>('div')`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${props => transparentize(0.25, props.theme.colors.black)};
  z-index: ${props => props.theme.zIndex.overlay};
  transition: visibility 0.3 ease;
`;

export default Overlay;
