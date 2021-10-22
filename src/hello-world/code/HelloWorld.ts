class HelloWorld extends HTMLElement {
    public name: string;
    public lastname: string;
    constructor() {
        super();
        this.name = this.attributes.getNamedItem("name")?.nodeValue || "";
        this.lastname =
            this.attributes.getNamedItem("lastname")?.nodeValue || "";
        this.attachShadow({ mode: "open" });
    } //.

    static get observedAttributes() {
        return ["name", "lastname"];
    } //.

    attributeChangedCallback(
        nameAtr: string,
        oldValue: string,
        newValue: string
    ) {
        const comp: any = this;
        comp[nameAtr] = newValue;
    } //.

    connectedCallback() {
        console.log(this.name, this.lastname);
        const template = document.createElement("template");
        template.innerHTML = `<div>
        <h1>Hello ${this.name} / ${this.lastname}</h1>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus porro, eaque commodi neque laboriosam inventore quod voluptatem, illum laudantium obcaecati explicabo expedita amet quae! Officiis voluptate quae saepe nostrum accusamus!
        </p>
        </div>`;
        this.style.color = "orangered";
        this.shadowRoot?.appendChild(template.content.cloneNode(true));
    }
} //. HelloWorld

window.customElements.define("hello-world", HelloWorld);
