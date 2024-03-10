# Extending existing HTML components using TypeScript

Collection of simple examples on how to extend the functionality or the look of an existing HTML component.

- [wc-word-count](./src/wc-word-count/readme.md)
  Component that allows to edit some text in a `<textarea>` and count the number of words in it.

---

## Development notes

Project make use of the ESNext modules so all the modules need to be included in the following manner.

```html
<script src="path-to-module.js" type="module"><script>
```

---

## Resources

- [MDN customElements](https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements)
- [MDN Using Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
- [YT JavaScript Events](https://www.youtube.com/playlist?list=PLyuRouwmQCjnEupVi5lpP6VrLg-eO-Zcp)
- [Custom events in JS: complete guide?](https://blog.logrocket.com/custom-events-in-javascript-a-complete-guide/)
- [HTML Symbols](https://www.htmlsymbol.com/)
- [Coolors.co palettes](https://coolors.co/palettes/trending)
- [YT Progress Bar with Web Components in JavaScript](https://www.youtube.com/watch?v=QWvK5_5hL7I)

---

## Development

```bash
# while on dev mode
npm run watch-ts

# generates the JavaScript files to be distributed
npm run BUILD
```

---

