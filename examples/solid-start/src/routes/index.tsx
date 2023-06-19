import { A } from "solid-start";

export default function Home() {
  return (
    <main class="mx-auto text-gray-700 p-4">
      <h1 class="font-bold text-lg mt-4">solid-satori</h1>
      <p class="mt-2">
        View{" "}
        <A href="/og.svg" target="_blank" class="text-sky-600 hover:underline">
          satori (/og.svg)
        </A>
      </p>
      <div class="mt-4">
        <div>
          Preview SVG (
          <A
            href="https://github.com/ryoid/solid-satori/blob/main/examples/solid-start/src/routes/og.svg.tsx"
            target="_blank"
            class="text-sky-600 hover:underline"
          >
            code example
          </A>
          )
        </div>
        <img src="/og.svg" alt="satori svg" />
      </div>
    </main>
  );
}
