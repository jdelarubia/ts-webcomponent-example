/**
 * wc-back-to-top-btn.ts
 * <back-to-top-btn> button component.
 * It reads the following parameters or chooses some defaults:
 * - tag (destination element ID)
 * - color (primary color)
 * - background (component background color)
 * - opacity (float percent)
 * - strokeWidth (float percent to denote the stroke thickness)
 * - position ("top", "bottom" & "left", "right")
 *
 * define component in main:
 * window.customElements.define('wc-back-to-top-btn', BackToTopBtn)
 */

document.addEventListener('scroll', (ev: Event) => {
  let showing: boolean = window.scrollY > window.innerHeight / 2 ? true : false
  const ToggleEvent = new CustomEvent('toggleBackToTopButton', {
    detail: { showing: showing },
  })
  document.dispatchEvent(ToggleEvent)
})

type BackToTopBtnAttrs = {
  tag?: string
  color?: string
  background?: string
  opacity?: number
  strokeWidth?: number
  position?: string
}

export class BackToTopBtn extends HTMLElement {
  private tag
  private color
  private background
  private opacity
  private strokeWidth
  private position
  private template
  // defaults
  static TAG = 'top'
  static COLOR = '#9c6d01'
  static BACKGROUND = '#fff'
  static OPACITY = 0.8
  static STROKEWIDTH = 0.7
  static POSITION = 'bottom right'
  static CSSIMPORT = `<style> @import './src/wc-back-to-top-btn.css'; </style>`

  constructor(attrs: BackToTopBtnAttrs = {}) {
    super()
    this.tag = attrs?.tag || this._getAttributeOrDefault('tag', BackToTopBtn.TAG)
    this.color = attrs?.color || this._getAttributeOrDefault('color', BackToTopBtn.COLOR)
    this.background =
      attrs?.background || this._getAttributeOrDefault('background', BackToTopBtn.BACKGROUND)
    this.opacity = attrs?.opacity || this._getAttributeOrDefault('opacity', BackToTopBtn.OPACITY)
    this.strokeWidth =
      attrs?.strokeWidth || this._getAttributeOrDefault('strokeWidth', BackToTopBtn.STROKEWIDTH)
    this.position = attrs?.position || this._getElementPosition()
    this.template = document.createElement('template')
    this.template.innerHTML = this._render()
  }

  connectedCallback() {
    this.appendChild(this.template.content.cloneNode(true))
    const a = <HTMLAnchorElement>this.querySelector('a')
    a.href = String(this.tag)

    document.addEventListener('toggleBackToTopButton', (ev: Event) => {
      a.classList.toggle('show', (ev as CustomEvent).detail.showing)
    })
  }

  /**
   * Return the element position as a string, or its defaults, "bottom right".
   * Positioning is resolved via CSS.
   */
  _getElementPosition(): string {
    const positionCss: Array<string> = []
    const position = this.getAttribute('position')?.split(' ')

    position?.forEach((style) => {
      positionCss.push(style)
    })
    if (!positionCss.includes('top') && !positionCss.includes('bottom')) {
      positionCss.push('bottom')
    }
    if (!positionCss.includes('right') && !positionCss.includes('left')) {
      positionCss.push('right')
    }
    return positionCss.join(' ')
  }

  /**
   * Generic method to retrieve the value of an attribute or, if not present, a default value.
   * @param id string
   * @param defaultValue string|number
   * @returns string|number
   */
  _getAttributeOrDefault(id: string, defaultValue: string | number): string | number {
    const attr = this.getAttribute(id)?.toLowerCase()
    return attr || defaultValue
  }

  /**
   * Return the web component to be rendered.
   */
  _render() {
    const svg = `<svg width="26" height="26" viewBox="0 0 6.879 6.879" xmlns="http://www.w3.org/2000/svg">
    <g style="display:inline">
    <path style="display:inline;fill:${this.background};fill-opacity:${this.opacity};fill-rule:evenodd;stroke:${this.color};stroke-width:${this.strokeWidth};stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none" d="m26.456 1.35.011 2.632A1.332 1.332 44.874 0 0 27.8 5.309h2.581a1.354 1.354 135 0 0 1.354-1.354V1.35A1.332 1.332 45.127 0 0 30.409.018L27.8.006a1.339 1.339 135 0 0-1.345 1.345Z" transform="matrix(1.15303 0 0 1.14852 -30.108 .388)"/>
    <path style="display:inline;fill:none;fill-rule:evenodd;stroke:${this.color};stroke-width:${this.strokeWidth};stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1" d="m1.342 4.597 2.104-2.145 2.09 2.138"/>
    </g>
    </svg>`
    const css = BackToTopBtn.CSSIMPORT
    const html = `<a href="${this.tag}" class="back-to-top-btn ${this.position}">${svg}</a>`
    return css + html
  }
} //. BackToTopBtn

window.customElements.define('wc-back-to-top-btn', BackToTopBtn)

// Create and add a second BackToTopBtn component programmatically
const secondHalf = document.querySelector('#second-half')
secondHalf?.appendChild(
  new BackToTopBtn({
    tag: 'top',
    color: 'darkgreen',
    background: 'lime',
    opacity: 0.6,
    strokeWidth: 0.3,
    position: 'bottom left',
  })
)
