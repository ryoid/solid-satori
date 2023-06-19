import satori, { SatoriOptions } from 'satori'
import { html as htmlToReactNode } from 'satori-html'
import { JSX } from 'solid-js'
import { renderToStringAsync } from 'solid-js/web'

/**
 * Renders a Solid component to an SVG string.
 * Returns SVG string
 */
export async function renderToSvg(component: () => JSX.Element, options: SatoriOptions) {
  const result = await renderToStringAsync(component)
  const markup = htmlToReactNode(result)
  return satori(markup, options)
}
