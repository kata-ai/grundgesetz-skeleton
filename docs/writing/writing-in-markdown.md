---
id: writing-in-markdown
title: Writing in Markdown
prev: table-of-contents
---

Writing documentation in Gatsby is done in Markdown. Grundgesetz uses Remark to parse Markdown files and turn them into HTML.

## Frontmatters

We provide the following Markdown frontmatters in each documentation page.

- `id` - A unique identifier representing the markdown page. This will be referenced in `toc.json` when getting the links for the navigation sidebar, as well as the `prev` and `next` items of the pagination.
- `title` - The title of the page.
- `prev` - Optional. This contains the `id` of the page that appears on the "Previous Page" navigation item.
- `next` - Optional. This contains the `id` of the page that appears on the "Next Page" navigation item.
