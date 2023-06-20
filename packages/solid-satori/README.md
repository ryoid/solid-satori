<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-satori&background=tiles&project=%20" alt="solid-satori">
</p>

# solid-satori

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

Solid wrapper for [Satori](https://github.com/vercel/satori). Convert Solid components to SVG

- [SolidStart Example](https://github.com/ryoid/solid-satori/tree/main/examples/solid-start)

## Quick start

Install it:

```bash
npm i solid-satori
# or
yarn add solid-satori
# or
pnpm add solid-satori
```

Use it:

```tsx
import { renderToSvg } from "solid-satori";

const svg: string = await renderToSvg(
  () => (
    <div>
      Hello World
    </div>
  ),
  {
    width: 1200,
    height: 630,
    fonts: [
      ...
    ],
  },
);
```

## Converting to Image

If you are using Node you can use [`@resvg/resvg-js`](https://github.com/yisibl/resvg-js#nodejs-1), for edge or browser you can use [`@resvg/resvg-wasm`](https://github.com/yisibl/resvg-js#webassembly).
