/**
 * wc-word-count.ts
 * Simple Word counter element.
 * Creates an editable article with its number of words below.
 * The position and look of element can be set via CSS.
 */

class WordCount extends HTMLElement {
  private template
  private refreshRate: number
  // defaults
  static REFRESH = 1500
  static WIDTH = '20em'
  static HEIGHT = '10em'

  constructor(refreshRate: number) {
    super()
    this.refreshRate = refreshRate || WordCount.REFRESH
    this.template = document.createElement('template')
    this.template.innerHTML = this._render()
  }

  connectedCallback() {
    this.appendChild(this.template.content.cloneNode(true))
    const editableContent = <HTMLDivElement>this.querySelector('#word-counter-container')
    const wordCount = <HTMLDivElement>this.querySelector('#word-counter')

    setInterval(() => {
      const content = editableContent.textContent || ''
      wordCount.textContent = this.countWords(content).toString()
    }, this.refreshRate)
  }

  _getElementDimensions(): [string, string] {
    const width = this.getAttribute('width')
    const height = this.getAttribute('height')
    return [height ? height : WordCount.HEIGHT, width ? width : WordCount.WIDTH]
  }

  _render() {
    const [height, width] = this._getElementDimensions()
    const css = `<style> @import "./src/wc-word-count.css"; </style>`
    const html = `<article contenteditable="" id="word-counter-container">Edit your text here...</article>
    <div class="counter" id="word-counter"></div>`
    return css + html
  }

  /**
   * Given some text, return the number of words in that text.
   * @param textContent
   * @return number
   */
  countWords(textContent: string): number {
    if (textContent == '' || textContent.length === 0 || !textContent) return 0
    return textContent.trim().toLocaleLowerCase().split(' ').length
  }
} //. WordCount

window.customElements.define('wc-word-count', WordCount)
