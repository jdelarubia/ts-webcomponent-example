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
    return
  }
} //. InstagramBtn

window.customElements.define('wc-instagram-btn', InstagramBtn)
