const _NUMBERID = "niceNumber";
const _INCID = "inc";
const _INCID10 = "inc10";
const _DECID = "dec";
const _DECID10 = "dec10";
const styles = `<style>@import "css/nice-number.css";</style>`;

const component = `
<button id="${_DECID10}">&minus;10</button><button id="${_DECID}">&minus;</button><input
type="number"
name=""
id="${_NUMBERID}"
min="0"
value="0"
max="100"
/><button id="${_INCID}">&plus;</button><button id="${_INCID10}">&plus;10</button>
`;

const template = document.createElement("template");

template.innerHTML = styles + component;

class NiceNumberComponent extends HTMLElement {
    private shadow: ShadowRoot;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    } //.

    connectedCallback() {
        this.render();
    } //.

    private getInputElement(): HTMLInputElement {
        return <HTMLInputElement>this.shadow.getElementById(_NUMBERID);
    } //.

    inc() {
        const input = this.getInputElement();
        input.value = (parseInt(input.value) + 1).toString();
        this.normalize();
    } //.
    inc10() {
        const input = this.getInputElement();
        input.value = (parseInt(input.value) + 10).toString();
        this.normalize();
    } //.

    dec() {
        const input = this.getInputElement();
        input.value = (parseInt(input.value) - 1).toString();
        this.normalize();
    } //.
    dec10() {
        const input = this.getInputElement();
        input.value = (parseInt(input.value) - 10).toString();
        this.normalize();
    } //.

    normalize() {
        const input = this.getInputElement();
        const val = parseInt(input.value);
        const min = parseInt(input.min);
        const max = parseInt(input.max);
        if (val >= max) {
            input.value = max.toString();
            return false;
        }
        if (val <= min) {
            input.value = min.toString();
            return false;
        }
        return true;
    } //.

    render() {
        this.shadow.innerHTML = "";
        this.shadow.appendChild(template.content.cloneNode(true));

        // listen to button "click"s
        this.shadow
            .getElementById(_INCID)
            ?.addEventListener("click", this.inc.bind(this));
        this.shadow
            .getElementById(_INCID10)
            ?.addEventListener("click", this.inc10.bind(this));
        this.shadow
            .getElementById(_DECID)
            ?.addEventListener("click", this.dec.bind(this));
        this.shadow
            .getElementById(_DECID10)
            ?.addEventListener("click", this.dec10.bind(this));
        // listen to input "change" events
        this.shadow
            .getElementById(_NUMBERID)
            ?.addEventListener("change", this.normalize.bind(this));
    } //.
} //. NiceNumberComponent

window.customElements.define("nice-number", NiceNumberComponent);

export { NiceNumberComponent };
