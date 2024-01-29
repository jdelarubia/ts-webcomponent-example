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
    shadow;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow.appendChild(template.content.cloneNode(true));
        const name = this.getAttribute("name");
        const h3 = this.shadow.querySelector("h3");
        h3.innerHTML = name;
    } //.
    connectedCallback() { } //.
} //. ProductCard
window.customElements.define("product-card", ProductCard);
export { ProductCard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdENhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcm9kdWN0Q2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLEtBQUssR0FBRzs7Ozs7Ozs7U0FRTCxDQUFDO0FBQ1YsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNwRCxRQUFRLENBQUMsU0FBUztJQUNkLEtBQUs7UUFDTDs7T0FFRyxDQUFDO0FBRVIsTUFBTSxXQUFZLFNBQVEsV0FBVztJQUN6QixNQUFNLENBQWE7SUFFM0I7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFMUQsTUFBTSxJQUFJLEdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxNQUFNLEVBQUUsR0FBdUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQyxDQUFDLEdBQUc7SUFFTCxpQkFBaUIsS0FBSSxDQUFDLENBQUMsR0FBRztDQUM3QixDQUFDLGVBQWU7QUFFakIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBRTFELE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQyJ9