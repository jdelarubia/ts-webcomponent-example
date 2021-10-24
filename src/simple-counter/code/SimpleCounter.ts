const styles = `<style>@import "./css/simple-counter.css";</style>`;
const template = document.createElement("template");

class SimpleCounter extends HTMLElement {
    private shadow: ShadowRoot;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    } //.

    set count(val: string) {
        this.setAttribute("count", val);
    } //.

    get count(): any {
        return this.getAttribute("count");
    } //.

    static get observedAttributes() {
        return ["count"];
    } //.

    attributeChangedCallback(prop: string, oldVal: any, newVal: any) {
        if (prop === "count") {
            this.render();
        }
    } //.

    connectedCallback() {
        this.render();
    } //.

    inc() {
        this.count = (parseInt(this.count) + 1).toString();
    } //.

    render() {
        this.shadow.innerHTML = "";
        template.innerHTML =
            styles +
            `
        <h3>SimpleCounter</h3>
        <button id="btn">Increment</button>
        <span class="counter">${this.count}</span>
        `;
        this.shadow.appendChild(template.content.cloneNode(true));

        // attach the button event listener
        let btn = <HTMLButtonElement>this.shadow.querySelector("#btn");
        btn?.addEventListener("click", this.inc.bind(this));
    }
} //. SimpleCounter

window.customElements.define("simple-counter", SimpleCounter);
