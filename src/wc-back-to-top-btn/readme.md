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
    tag: 'top',
    color: 'darkgreen',
    background: 'lime',
    opacity: 0.6,
    strokeWidth: 0.3,
    position: 'bottom left',
  })
)
```

---
