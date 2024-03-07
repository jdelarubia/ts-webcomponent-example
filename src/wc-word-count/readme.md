# WordCount

This example uses a `<textarea>` to allow us to write text, followed by a `<div>` to show the number of words in it.

## Development

```bash
# while on dev mode
npm run watch-ts

# generates the JavaScript to be distributed
npm run BUILD
```

## Distribution

- Copy `src/wc-word-count.css` & `src/wc-word-count.js` on to your project.
- Fix the linking to `wc-word-count.css` from your `wc-word-count.js`.

## Examples

Via `html`:

```html
<!-- Provide` width`, `height` and `innerText` like so: -->
<wc-word-count width="22em" height="20em">Enter some text here...</wc-word-count>
```

Via `JavaScript`:

```javascript
// Provide` width`, `height` and `innerText` in an attribute like this:
const containerSection = document.querySelector('#container-section')
containerSection.appendChild(
  new WordCount({
    width: '10em',
    height: '5em',
    initText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  })
)
```

---
