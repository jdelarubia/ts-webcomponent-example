# WordCount

This example uses a `<textarea>` to allow us to write text, followed by a `<div>` to show the number of words in it.

## TOC

- [WordCount](#wordcount)
  - [TOC](#toc)
  - [Component distribution](#component-distribution)
  - [Code examples](#code-examples)

---

## Component distribution

- Copy `src/wc-word-count.css` & `src/wc-word-count.js` on to your project.
- Fix the linking to `wc-word-count.css` from your `wc-word-count.js`.

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
