"use strict";
const styles = `<style>@import "./css/simple-counter.css";</style>`;
const template = document.createElement("template");
class SimpleCounter extends HTMLElement {
    shadow;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    } //.
    set count(val) {
        this.setAttribute("count", val);
    } //.
    get count() {
        return this.getAttribute("count");
    } //.
    static get observedAttributes() {
        return ["count"];
    } //.
    attributeChangedCallback(prop, oldVal, newVal) {
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
        let btn = this.shadow.querySelector("#btn");
        btn?.addEventListener("click", this.inc.bind(this));
    }
} //. SimpleCounter
window.customElements.define("simple-counter", SimpleCounter);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2ltcGxlQ291bnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNpbXBsZUNvdW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sTUFBTSxHQUFHLG9EQUFvRCxDQUFDO0FBQ3BFLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFcEQsTUFBTSxhQUFjLFNBQVEsV0FBVztJQUMzQixNQUFNLENBQWE7SUFFM0I7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQyxHQUFHO0lBRUwsSUFBSSxLQUFLLENBQUMsR0FBVztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsR0FBRztJQUVMLElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsR0FBRztJQUVMLE1BQU0sS0FBSyxrQkFBa0I7UUFDekIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxHQUFHO0lBRUwsd0JBQXdCLENBQUMsSUFBWSxFQUFFLE1BQVcsRUFBRSxNQUFXO1FBQzNELElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0wsQ0FBQyxDQUFDLEdBQUc7SUFFTCxpQkFBaUI7UUFDYixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQyxDQUFDLEdBQUc7SUFFTCxHQUFHO1FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdkQsQ0FBQyxDQUFDLEdBQUc7SUFFTCxNQUFNO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzNCLFFBQVEsQ0FBQyxTQUFTO1lBQ2QsTUFBTTtnQkFDTjs7O2dDQUdvQixJQUFJLENBQUMsS0FBSztTQUNqQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUUxRCxtQ0FBbUM7UUFDbkMsSUFBSSxHQUFHLEdBQXNCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBQ0osQ0FBQyxpQkFBaUI7QUFFbkIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUMifQ==