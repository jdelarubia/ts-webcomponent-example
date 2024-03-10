/**
 * wc-word-count.ts
 *
 * Creates an editable textarea which shows the number of words on the bottom right corner.
 * The position and look of element can be set via CSS.
 * Possible attributes:
 * - width & height: give dimensions to the textarea
 * - refreshrate: frequency (in milliseconds) at which for counting the number of words
 * - placeholder: phrase to be displayed in the textarea
 * - resize: ability of the textarea to be resized (true or false)
 */

type WordCountAttrs = {
  refreshRate?: number
  placeholder?: string
  resize?: Boolean
  height?: string
  width?: string
}

class WordCount extends HTMLElement {
  private template
  private placeholder: string
  private refreshRate: number
  // defaults
  static NAME = ''
  static REFRESH = 2500
  static WIDTH = '20em'
  static HEIGHT = '10em'
  static RESIZE = 'both'
  static PLACEHOLDER = 'Enter some text here...'
  static CSSFILE = './src/wc-word-count.css'

  constructor(attrs: WordCountAttrs = {}) {
    super()
    this.refreshRate = Number(
      attrs?.refreshRate || this._getAttributeOrDefault('refreshrate', WordCount.REFRESH)
    )
    this.placeholder = attrs?.placeholder || this.textContent || WordCount.PLACEHOLDER
    this.textContent = ''
    this.template = document.createElement('template')
    this.template.innerHTML = this._render()
  }

  connectedCallback() {
    this.appendChild(this.template.content.cloneNode(true))
    const editableContent = <HTMLTextAreaElement>this.querySelector('textarea')
    const wordCount = <HTMLDivElement>this.querySelector('div#word-counter')

    setInterval(() => {
      const content = editableContent.value || ''
      wordCount.textContent = this._countWords(content).toString()
    }, this.refreshRate)
  }

  _getResize(): string {
    const resize = this.getAttribute('resize')?.toLowerCase()
    return resize === 'false' ? 'none' : WordCount.RESIZE
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
    const width = this._getAttributeOrDefault('width', WordCount.WIDTH)
    const height = this._getAttributeOrDefault('height', WordCount.HEIGHT)
    const name = this._getAttributeOrDefault('name', WordCount.NAME)
    const resize = this._getResize()
    const css = `<style> @import ${WordCount.CSSFILE}; </style>`
    const html = `<div class="word-counter" style="width: ${width}; height: ${height}">
    <textarea id="word-counter-container" name="${name}" placeholder="${this.placeholder}" style="resize:${resize}"></textarea>
    <div id="word-counter"></div>
    </div>`
    return css + html
  }

  /**
   * Given some text, return the number of words in that text.
   * @param textContent string
   * @return number
   */
  _countWords(textContent: string): number {
    if (textContent == '' || textContent.length === 0 || !textContent) return 0
    return textContent.trim().toLocaleLowerCase().split(' ').length
  }
} //. WordCount

window.customElements.define('wc-word-count', WordCount)

// Create and add a WordCount component programmatically
const secondHalf = document.querySelector('#second-half')
secondHalf?.appendChild(
  new WordCount({
    width: '10em',
    height: '5em',
    placeholder: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  })
)
