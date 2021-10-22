"use strict";
class HelloWorld extends HTMLElement {
    name;
    lastname;
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
    attributeChangedCallback(nameAtr, oldValue, newValue) {
        const comp = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9Xb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhlbGxvV29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sVUFBVyxTQUFRLFdBQVc7SUFDekIsSUFBSSxDQUFTO0lBQ2IsUUFBUSxDQUFTO0lBQ3hCO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVE7WUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxTQUFTLElBQUksRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsR0FBRztJQUVMLE1BQU0sS0FBSyxrQkFBa0I7UUFDekIsT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUMsR0FBRztJQUVMLHdCQUF3QixDQUNwQixPQUFlLEVBQ2YsUUFBZ0IsRUFDaEIsUUFBZ0I7UUFFaEIsTUFBTSxJQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQyxDQUFDLEdBQUc7SUFFTCxpQkFBaUI7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsUUFBUSxDQUFDLFNBQVMsR0FBRztvQkFDVCxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxRQUFROzs7OztlQUtqQyxDQUFDO1FBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUNKLENBQUMsY0FBYztBQUVoQixNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUMifQ==