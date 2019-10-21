import styled from 'styled-components';
import {
  display,
  maxWidth,
  space,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  textAlign,
  verticalAlign,
  letterSpacing,
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  MaxWidthProps,
  SpaceProps,
  DisplayProps,
  TextAlignProps,
  VerticalAlignProps,
  LetterSpacingProps
} from 'styled-system';

export interface TypographyProps
  extends DisplayProps,
    MaxWidthProps,
    SpaceProps,
    FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    LineHeightProps,
    TextAlignProps,
    VerticalAlignProps,
    LetterSpacingProps {
  /** Extended color props. */
  color?: string;
}

/**
 * This is a base `Text` element to handle typography elements.
 */
export const Typography = styled('span')<TypographyProps>`
  ${display};
  ${maxWidth};
  ${space};
  ${fontFamily}
  ${fontSize};
  ${fontWeight}
  ${lineHeight};
  ${color};
  ${textAlign};
  ${verticalAlign};
  ${letterSpacing};
`;

Typography.displayName = 'Typography';
