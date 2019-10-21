# Reset

Global CSS resets for grundgesetz-skeleton.

## Usage

Wrap your app inside the `ThemeReset` to use the resets and `ThemeProvider` to be used by `styled-system`.

```jsx
import { ThemeReset } from 'path/to/components/foundations';

export default function MyApp({ children }) {
  return <ThemeReset>{children}</ThemeReset>;
}
```

You can also use `GlobalStyles` as a standalone component which injects the base styles into the component.

```jsx
import { GlobalStyles, Theme } from 'path/to/components/foundations';

export default function MyApp({ children }) {
  return (
    <Theme>
      <GlobalStyles />
      {children}
    </Theme>
  );
}
```
