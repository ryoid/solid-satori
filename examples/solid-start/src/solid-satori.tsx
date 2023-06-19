import { Resvg } from "@resvg/resvg-js";
import satori, { SatoriOptions } from "satori";
import { html as htmlToReactNode } from "satori-html";
import { JSX } from "solid-js";
import { renderToStringAsync } from "solid-js/web";

export type Options = SatoriOptions & {
  /**
   * Width of the image to render in pixels
   */
  width: number;
  /**
   * Height of the image to render in pixels
   */
  height: number;
};

export async function renderToImage(
  component: () => JSX.Element,
  options: Options,
) {
  const result = await renderToStringAsync(component);
  const markup = htmlToReactNode(result);
  const svg = await satori(markup, {
    ...options,
    height: +options.height,
    width: +options.width,
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: +options.width,
    },
  });

  return resvg.render();
}

export async function ImageResponse(
  component: () => JSX.Element,
  options: Options,
  init?: ResponseInit,
) {
  const image = await renderToImage(component, options);
  return new Response(image.asPng(), {
    ...init,
    headers: {
      "content-type": "image/png",
      ...init?.headers,
    },
  });
}
