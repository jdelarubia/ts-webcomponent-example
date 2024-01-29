const style = `<style>
:host {
    font-size: small;
    font-family: Arial;
}
h3 {
    text-transform: uppercase;
}
</style>`;
const template = document.createElement("template");
template.innerHTML =
    style +
    `<div>
<h3></h3>
</div>`;

class ProductCard extends HTMLElement {
    private shadow: ShadowRoot;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow.appendChild(template.content.cloneNode(true));

        const name = <string>this.getAttribute("name");
        const h3 = <HTMLHeadingElement>this.shadow.querySelector("h3");
        h3.innerHTML = name;
    } //.

    connectedCallback() {} //.
} //. ProductCard

window.customElements.define("product-card", ProductCard);

export { ProductCard };
