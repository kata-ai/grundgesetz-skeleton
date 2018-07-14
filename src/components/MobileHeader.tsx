import React from 'react';
import styled from 'utils/styled';
import Container from './Container';

interface MobileHeaderProps {
  visible?: boolean;
  absolute?: boolean;
  transparent?: boolean;
}

const Wrapper = styled<MobileHeaderProps, 'div'>('div')`
  position: ${props => (props.absolute ? 'absolute' : 'fixed')};
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.theme.heights.header}px;
  padding: 0 ${props => props.theme.dimensions.containerPadding}rem;
  background-color: ${props => (props.transparent ? 'transparent' : props.theme.colors.ui.light)};
  z-index: ${props => props.theme.zIndex.header};

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    display: none;
  }
`;

const Inner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const MobileHeader: React.SFC<MobileHeaderProps> = ({ children, absolute, transparent }) => (
  <Wrapper absolute={absolute} transparent={transparent}>
    <Inner>{children}</Inner>
  </Wrapper>
);

export default MobileHeader;
