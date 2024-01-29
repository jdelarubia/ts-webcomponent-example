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
    shadow;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow.appendChild(template.content.cloneNode(true));
        const name = this.getAttribute("name");
        const avatarUrl = this.getAttribute("avatar");
        const h3 = this.shadow.querySelector("h3");
        const img = this.shadow.querySelector("img");
        h3.innerHTML = name;
        img.src = avatarUrl;
    } //.
    getToggleBtn() {
        return this.shadow.getElementById("toggle");
    } //.
    getInfoDiv() {
        return this.shadow.querySelector(".info");
    } //.
    toggle() {
        const info = this.getInfoDiv();
        const toggleBtn = this.getToggleBtn();
        if (info.style.visibility === "hidden") {
            toggleBtn.innerHTML = "hide";
            info.style.visibility = "visible";
        }
        else {
            toggleBtn.innerHTML = "show";
            info.style.visibility = "hidden";
        }
    } //.
    connectedCallback() {
        this.getToggleBtn().addEventListener("click", this.toggle.bind(this));
    } //.
    disconnectedCallback() {
        this.getToggleBtn().removeEventListener("click", this.toggle.bind(this));
    } //.
} //.
window.customElements.define("user-card", UserCard);
export { UserCard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckNhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVc2VyQ2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLEtBQUssR0FBRywyQ0FBMkMsQ0FBQztBQUMxRCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3BELFFBQVEsQ0FBQyxTQUFTO0lBQ2QsS0FBSztRQUNMOzs7Ozs7Ozs7O09BVUcsQ0FBQztBQUVSLE1BQU0sUUFBUyxTQUFRLFdBQVc7SUFDdEIsTUFBTSxDQUFhO0lBRTNCO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTFELE1BQU0sSUFBSSxHQUFXLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsTUFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxNQUFNLEVBQUUsR0FBdUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsTUFBTSxHQUFHLEdBQXFCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxHQUFHO0lBRUcsWUFBWTtRQUNoQixPQUEwQixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUMsR0FBRztJQUVHLFVBQVU7UUFDZCxPQUF1QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5RCxDQUFDLENBQUMsR0FBRztJQUVHLE1BQU07UUFDVixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDckMsU0FBUyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ3RDLENBQUM7YUFBTSxDQUFDO1lBQ0osU0FBUyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDLENBQUMsR0FBRztJQUVMLGlCQUFpQjtRQUNiLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDLENBQUMsR0FBRztJQUVMLG9CQUFvQjtRQUNoQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQ25DLE9BQU8sRUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDekIsQ0FBQztJQUNOLENBQUMsQ0FBQyxHQUFHO0NBQ1IsQ0FBQyxHQUFHO0FBRUwsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRXBELE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyJ9