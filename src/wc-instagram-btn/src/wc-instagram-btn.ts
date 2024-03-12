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
  //defaults
  constructor() {
    super()
  }
  connectedCallback() {}
  _render() {
    return
  }
} //. InstagramBtn

window.customElements.define('wc-instagram-btn', InstagramBtn)
