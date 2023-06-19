import { ComponentProps } from "solid-js";
import { renderToSvg } from "solid-satori";

/**
 * Wrapped to include Satori's Tailwind attribute `tw`
 */
const Div = (props: ComponentProps<"div"> & { tw?: string }) => (
  <div {...props} />
);

/**
 * Load a font from a remote URL
 * @param url URL to load the font from
 */
export async function loadRemoteFont(url: string | URL): Promise<ArrayBuffer> {
  const res = await fetch(url);
  return res.arrayBuffer();
}

function getBaseUrl() {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

const font = loadRemoteFont(
  new URL("/fonts/ibm-plex-mono-latin-400-normal.ttf", getBaseUrl()),
);

export async function GET() {
  try {
    const svg = await renderToSvg(
      () => (
        // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
        <Div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            "flex-direction": "row",
            "align-items": "center",
            "justify-content": "center",
            "background-image": "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
          }}
        >
          <Div tw="bg-gray-900 text-gray-50 absolute top-4 left-4 p-2">
            Generated at {new Date().toISOString()}
          </Div>

          <Div tw="bg-gray-50 flex mx-4">
            <Div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
              <Div tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
                <Div>Ready to Dive in?</Div>
                <Div tw="text-indigo-600">Start your free trial today.</Div>
              </Div>
              <Div tw="mt-8 flex md:mt-0">
                <Div tw="flex rounded-md shadow">
                  <Div tw="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white">
                    Get started
                  </Div>
                </Div>
                <Div tw="ml-3 flex rounded-md shadow">
                  <Div tw="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600">
                    Learn more
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "IBM Plex Mono",
            data: await font,
            weight: 400,
            style: "normal",
          },
        ],
      },
    );

    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
      },
    });
  } catch (e: any) {
    console.error(e);
    return new Response(e.message, {
      status: 500,
    });
  }
}
