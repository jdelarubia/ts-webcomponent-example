# BackToTop

Component that shows a button-like anchor to go back to a given tag.

## TOC

- [BackToTop](#backtotop)
  - [TOC](#toc)
  - [Component distribution](#component-distribution)
  - [Code examples](#code-examples)

---

## Component distribution

- Copy
  - `src/wc-back-to-top-btn.css`, &
  - `src/wc-back-to-top-btn.js` (or `src/wc-back-to-top-btn.ts`) on to your project.
- Set the specific link to `wc-back-to-top-btn.css` from your `wc-back-to-top-btn.js` (or `.ts`).
- Make changes to your `.css` file until you get the result you're looking for.

---

## Code examples

Via `html`, you can provide `tag`, `color`, `background`, `opacity`, `strokeWidth` and `position`, like in the example below.

```html
<wc-back-to-top-btn
  color="#ddd"
  background="#f0f"
  opacity=".3"
  tag="top"
  strokewidth=".5"
  position="right"
></wc-back-to-top-btn>
```

Via `JavaScript`, provide the same attributes as an object as shown below.

```javascript
const containerSection = document.querySelector('#container-section')
containerSection.appendChild(
  new BackToTopBtn({
    tag: 'top', // destination tag
    color: 'darkgreen', // primary color
    background: 'lime', // component background color
    opacity: 0.6, // level of background opacity (0 to 1)
    strokeWidth: 0.3, // stroke thickness
    position: 'bottom left', // CSS-defined positioning
  })
)
```

---
