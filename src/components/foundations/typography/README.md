# Typography

Typography primitives provided by grundgesetz-skeleton.

## Usage

### `Heading` component

The heading component is used for all headings.

```jsx
import { ThemeReset, Heading } from 'path/to/components/foundations';

export default function MyApp({ children }) {
  return (
    <ThemeReset>
      <Heading size={900}>We are making AI technology accessible to everyone</Heading>
      <Heading size={800}>We are making AI technology accessible to everyone</Heading>
      <Heading size={700}>We are making AI technology accessible to everyone</Heading>
      <Heading size={600}>We are making AI technology accessible to everyone</Heading>
      <Heading size={500}>We are making AI technology accessible to everyone</Heading>
      <Heading size={400}>We are making AI technology accessible to everyone</Heading>
      <Heading size={300}>We are making AI technology accessible to everyone</Heading>
      <Heading size={200}>We are making AI technology accessible to everyone</Heading>
    </ThemeReset>
  );
}
```

Heading renders a `h2` by default. If you would like to determine which HTML element it renders, you can use the `as` prop.

```jsx
<ThemeReset>
  <Heading size={700} as="h3">
    We are making AI technology accessible to everyone
  </Heading>
</ThemeReset>
```

### `Text` component

The text component is used for single line text.

```jsx
import { ThemeReset, Heading } from 'path/to/components/foundations';

export default function MyApp({ children }) {
  return (
    <ThemeReset>
      <Text size={400}>We are making AI technology accessible to everyone</Text>
      <Text size={300}>We are making AI technology accessible to everyone</Text>
      <Text size={200}>We are making AI technology accessible to everyone</Text>
    </ThemeReset>
  );
}
```

Text renders a `span` by default. If you would like to determine which HTML element it renders, you can use the `as` prop.

```jsx
<ThemeReset>
  <Text size={300} as="p">
    We are making AI technology accessible to everyone
  </Heading>
</ThemeReset>
```

### `Paragraph` component

Renders a paragraph-sized text by default

```jsx
import { ThemeReset, Heading } from 'path/to/components/foundations';

export default function MyApp() {
  return (
    <ThemeReset>
      <Paragraph>
        We are Kata.ai, an Indonesian conversational Artificial Intelligence company, focused on understanding human
        conversation so we can improve the way humans collaborate with technology to be more productive and empowered.
        Kata.ai’s Natural Language Processing (NLP) technology powers multi-purpose chatbots for major corporations in
        Indonesia across different industries, including FMCG, Telecommunication, Banking & Financial Service, and
        Retail.
      </Paragraph>
    </ThemeReset>
  );
}
```
