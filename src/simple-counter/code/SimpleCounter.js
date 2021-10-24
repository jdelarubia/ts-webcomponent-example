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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2ltcGxlQ291bnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNpbXBsZUNvdW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sTUFBTSxHQUFHLG9EQUFvRCxDQUFDO0FBQ3BFLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFcEQsTUFBTSxhQUFjLFNBQVEsV0FBVztJQUMzQixNQUFNLENBQWE7SUFFM0I7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQyxHQUFHO0lBRUwsSUFBSSxLQUFLLENBQUMsR0FBVztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsR0FBRztJQUVMLElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsR0FBRztJQUVMLE1BQU0sS0FBSyxrQkFBa0I7UUFDekIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxHQUFHO0lBRUwsd0JBQXdCLENBQUMsSUFBWSxFQUFFLE1BQVcsRUFBRSxNQUFXO1FBQzNELElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7SUFDTCxDQUFDLENBQUMsR0FBRztJQUVMLGlCQUFpQjtRQUNiLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDLENBQUMsR0FBRztJQUVMLEdBQUc7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2RCxDQUFDLENBQUMsR0FBRztJQUVMLE1BQU07UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDM0IsUUFBUSxDQUFDLFNBQVM7WUFDZCxNQUFNO2dCQUNOOzs7Z0NBR29CLElBQUksQ0FBQyxLQUFLO1NBQ2pDLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTFELG1DQUFtQztRQUNuQyxJQUFJLEdBQUcsR0FBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0QsR0FBRyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDSixDQUFDLGlCQUFpQjtBQUVuQixNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsQ0FBQyJ9