const style = `<style>@import "./css/style.css";</style>`;
const template = document.createElement("template");
template.innerHTML =
    style +
    `<div class="user-card">
    <img src="" />
    <div>
        <h3></h3>
        <div class="info">
            <p>Email: <slot name="email" /></p>
            <p>Phone: <slot name="phone" /></p>
        </div>
        <button id="toggle">hide</button>
    </div>
</div>`;

class UserCard extends HTMLElement {
    private shadow: ShadowRoot;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow.appendChild(template.content.cloneNode(true));

        const name = <string>this.getAttribute("name");
        const avatarUrl = <string>this.getAttribute("avatar");
        const h3 = <HTMLHeadingElement>this.shadow.querySelector("h3");
        const img = <HTMLImageElement>this.shadow.querySelector("img");
        h3.innerHTML = name;
        img.src = avatarUrl;
    } //.

    private getToggleBtn(): HTMLButtonElement {
        return <HTMLButtonElement>this.shadow.getElementById("toggle");
    } //.

    private getInfoDiv(): HTMLDivElement {
        return <HTMLDivElement>this.shadow.querySelector(".info");
    } //.

    private toggle() {
        const info = this.getInfoDiv();
        const toggleBtn = this.getToggleBtn();
        if (info.style.visibility === "hidden") {
            toggleBtn.innerHTML = "hide";
            info.style.visibility = "visible";
        } else {
            toggleBtn.innerHTML = "show";
            info.style.visibility = "hidden";
        }
    } //.

    connectedCallback() {
        this.getToggleBtn().addEventListener("click", this.toggle.bind(this));
    } //.

    disconnectedCallback() {
        this.getToggleBtn().removeEventListener(
            "click",
            this.toggle.bind(this)
        );
    } //.
} //.

window.customElements.define("user-card", UserCard);

export { UserCard };
