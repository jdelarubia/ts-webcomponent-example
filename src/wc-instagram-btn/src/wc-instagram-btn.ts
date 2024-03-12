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

    super()

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
    style="display:inline;fill:none;fill-rule:evenodd;stroke:#000;stroke-width:.692519;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none" 
    d="m26.456 1.35.011 2.632A1.332 1.332 44.874 0 0 27.8 5.309h2.581a1.354 1.354 135 0 0 1.354-1.354V1.35A1.332 1.332 45.127 0 0 30.409.018L27.8.006a1.339 1.339 135 0 0-1.345 1.345Z" transform="matrix(1.15747 0 0 1.15294 -30.237 .376)"/>
    <circle cx="3.44" cy="3.44" r="1.447"
    style="fill:none;fill-rule:evenodd;stroke:#000;stroke-width:.8;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none;stroke-opacity:1"/>
    <circle cx="5.292" cy="1.587" r=".529"
    style="fill:#000;fill-rule:evenodd;stroke:none;stroke-width:.79375;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none;stroke-opacity:1"/>
    </g>
    </svg>`
    const css = InstagramBtn.CSSIMPORT
    const html = `<a href="${this.url}" class="instagram-btn">${svg}</a>`
    return css + html
  }
} //. InstagramBtn

window.customElements.define('wc-instagram-btn', InstagramBtn)
