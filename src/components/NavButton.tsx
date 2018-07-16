import React from 'react';
import styled from 'utils/styled';

interface ToggleableProps {
  drawerIsOpen?: boolean;
}

const Wrapper = styled<ToggleableProps, 'button'>('button')`
  display: inline-block;
  padding: 0;
  color: ${props => props.theme.colors.white};
  border: none;
  background: none;
  cursor: pointer;
  z-index: ${props => props.theme.zIndex.floatingButton};

  &:hover,
  &:focus {
    outline: none;
  }

  svg {
    g {
      fill: ${props => props.theme.colors.gray.copy};
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    display: none;
  }
`;

const Inner = styled<ToggleableProps, 'div'>('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
`;

interface NavButtonProps {
  className?: string;
  drawerIsOpen?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavButton: React.SFC<NavButtonProps> = ({ className, drawerIsOpen, onClick }) => (
  <Wrapper className={className} onClick={onClick} drawerIsOpen={drawerIsOpen}>
    <Inner drawerIsOpen={drawerIsOpen}>
      {drawerIsOpen ? (
        <svg width="24px" height="24px" viewBox="0 0 24 24">
          <g fill="none" fillRule="evenodd">
            <rect
              transform="translate(11.748851, 11.748851) rotate(-315.000000) translate(-11.748851, -11.748851) "
              x="-3.02037964"
              y="9.90269729"
              width="29.5384615"
              height="3.69230769"
              rx="1.84615385"
            />
            {/* tslint:disable:max-line-length */}
            <rect
              transform="translate(11.748851, 11.748851) scale(-1, 1) rotate(-315.000000) translate(-11.748851, -11.748851) "
              x="-3.02037964"
              y="9.90269729"
              width="29.5384615"
              height="3.69230769"
              rx="1.84615385"
            />
            {/* tslint:enable:max-line-length */}
          </g>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" fillRule="evenodd">
            <rect width="24" height="3" rx="1.5" />
            <rect width="24" height="3" y="10.5" rx="1.5" />
            <rect width="24" height="3" y="21" rx="1.5" />
          </g>
        </svg>
      )}
    </Inner>
  </Wrapper>
);

export default NavButton;
