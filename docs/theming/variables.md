---
id: theming-variables
title: Variables
prev: theming-overview
---

Since Grundgesetz has [styled-system](https://styled-system.com/) under the hood, changing the look of Grundgesets is as simple as changing variables inside the. `src/components/foundations/variables.tsx` file.

## Available Variables

### Colors

This will be mapped into the `ThemeProvider` as a `styled-system` [color prop](https://styled-system.com/table#color). By default we provided a bunch of colour options for you to get started. If you want to replace the colors with your own, feel free to do so:

```js
export const colors = {
  white: '#FFF',
  black: '#000',
  danger: '#F00'
};
```

The color key can then be referenced as a prop in any color-related styled-system prop, for example:

```js
import { Box } from 'components/foundations';

function SomeComponent() {
  return (
    <Box color="white" bgColor="danger">
      Alert!
    </Box>
  );
}
```
