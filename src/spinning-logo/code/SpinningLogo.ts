/**
 * Web component example.
 * YouTube Video:
 * Pair Programming Web Components with Paul Lewis
 * https://www.youtube.com/watch?v=XCti72iChzg&list=PLsf-cGGUu4hE3T3dIxKc5zW8Nc89lVtIh
 */

const styles = `<style>:host { display: inline-block; width: 1rem; height: 1rem; }</style>`;

const template = document.createElement("template");
template.innerHTML = styles + `<slot />`;

class SpinningLogo extends HTMLImageElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot?.appendChild(template.content.cloneNode(true));

        this.animate(
            [
                { transform: "scale(0) rotate(0deg)" },
                { transform: "scale(0.5) rotate(1080deg)" },
                { transform: "scale(0) rotate(2160deg)" },
            ],
            {
                duration: 5000,
                easing: "cubic-bezier(0.88, 0.02, 0.06, 1)",
                fill: "forwards",
                iterations: Infinity,
            }
        );
    }
} //. SpinningLogo

window.customElements.define("spinning-logo", SpinningLogo, { extends: "img" });

export { SpinningLogo };
