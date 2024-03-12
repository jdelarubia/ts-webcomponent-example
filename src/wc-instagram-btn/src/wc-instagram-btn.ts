/**
 * wc-instagram-btn.ts
 * <instagram-btn> web component.
 *
 * define component in main:
 * window.customElements.define('instagram-btn', InstagramBtn)
 */

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
