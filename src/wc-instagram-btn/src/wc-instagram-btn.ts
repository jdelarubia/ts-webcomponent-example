/**
 * wc-instagram-btn.ts
 * <instagram-btn> web component.
 * It reads the following parameters or chooses some defaults:
 * - tag (destination element ID)
 * - color (primary color)
 * - background (component background color)
 * - opacity (float percent)
 * - strokeWidth (float percent to denote the stroke thickness)
 * - position ("top", "bottom" & "left", "right")
 *
 * define component in main:
 * window.customElements.define('instagram-btn', InstagramBtn)
 */

type InstagramBtnAttrs = {
  url?: string
  color?: string
  background?: string
  opacity?: number
  strokeWidth?: number
  position?: string
}

export class InstagramBtn extends HTMLElement {
  private url
  private color
  private background
  private opacity
  private strokeWidth
  private position
  private template
  //defaults
  static URL = ''
  static COLOR = '#9c6d01'
  static BACKGROUND = '#fff'
  static OPACITY = 0.8
  static STROKEWIDTH = 0.7
  static POSITION = 'bottom right'
  static CSSIMPORT = `<style> @import './src/wc-instagram-btn.css'; </style>`

  constructor(attrs: InstagramBtnAttrs) {
    super()
    this.url = attrs?.url || this._getAttributeOrDefault('url', InstagramBtn.URL)
    this.color = attrs?.color || this._getAttributeOrDefault('color', InstagramBtn.COLOR)
    this.background =
      attrs?.background || this._getAttributeOrDefault('background', InstagramBtn.BACKGROUND)
    this.opacity = attrs?.opacity || this._getAttributeOrDefault('opacity', InstagramBtn.OPACITY)
    this.strokeWidth =
      attrs?.strokeWidth || this._getAttributeOrDefault('strokeWidth', InstagramBtn.STROKEWIDTH)
    this.position = attrs?.position || this._getElementPosition()
    this.template = document.createElement('template')
    this.template.innerHTML = this._render()
  }

  connectedCallback() {
    this.appendChild(this.template.content.cloneNode(true))
    const a = <HTMLAnchorElement>this.querySelector('a')
    a.href = String(this.url)
  }

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

  _render() {
    const svg = `<svg width="26.125" height="26.124" viewBox="0 0 6.912 6.912" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(.017 .016)" style="display:inline">
    <path
    style="display:inline;fill:${this.background};fill-opacity:${this.opacity};fill-rule:evenodd;stroke:${this.color};stroke-width:${this.strokeWidth};stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none" 
    d="m26.456 1.35.011 2.632A1.332 1.332 44.874 0 0 27.8 5.309h2.581a1.354 1.354 135 0 0 1.354-1.354V1.35A1.332 1.332 45.127 0 0 30.409.018L27.8.006a1.339 1.339 135 0 0-1.345 1.345Z" transform="matrix(1.15747 0 0 1.15294 -30.237 .376)"/>
    <circle cx="3.44" cy="3.44" r="1.447"
    style="fill:none;fill-rule:evenodd;fill-opacity:${this.opacity};stroke:${this.color};stroke-width:${this.strokeWidth};stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none;stroke-opacity:1"/>
    <circle cx="5.292" cy="1.587" r=".529"
    style="fill:${this.color};fill-rule:evenodd;stroke:none;stroke-width:${this.strokeWidth};stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none;stroke-opacity:1"/>
    </g>
    </svg>`
    const css = InstagramBtn.CSSIMPORT
    const html = `<a href="${this.url}" class="instagram-btn ${this.position}">${svg}</a>`
    return css + html
  }
} //. InstagramBtn

window.customElements.define('wc-instagram-btn', InstagramBtn)

// Create and add a second InstagramBtn component programmatically
const secondHalf = document.querySelector('#second-half')
secondHalf?.appendChild(
  new InstagramBtn({
    url: 'top',
    color: 'darkgreen',
    background: 'lime',
    opacity: 0.6,
    strokeWidth: 0.3,
    position: 'bottom left',
  })
)
