# WordCount

Component that uses a `<textarea>`, counts and shows the number of words in it in real-time.

## TOC

- [WordCount](#wordcount)
  - [TOC](#toc)
  - [Component distribution](#component-distribution)
  - [Code examples](#code-examples)

---

## Component distribution

- Copy `src/wc-word-count.css` & `src/wc-word-count.js` (or `src/wc-word-count.ts`) on to your project.
- Set the specific link to `wc-word-count.css` from your `wc-word-count.js` (or `.ts`).

---

## Code examples

Via `html`, provide `name`, `width`, `height`, `resize`, `refreshrate` and `placeholder` like this:

```html
<wc-word-count
  width="22em"
  height="20em"
  name="textarea-fieldname"
  refresh="3000"
  placeholder="Enter some text here..."
></wc-word-count>
```

Via `JavaScript`, provide the same attributes as an object like in the example below:

```javascript
const containerSection = document.querySelector('#container-section')
containerSection.appendChild(
  new WordCount({
    name: 'textarea-fieldname',
    refresh: '3000',
    width: '10em',
    height: '5em',
    resize: false,
    placeholder: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  })
)
```

---
