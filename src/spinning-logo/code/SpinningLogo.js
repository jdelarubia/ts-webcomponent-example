/**
 * Web component example.
 * YouTube Video:
 * Pair Programming Web Components with Paul Lewis
 * https://www.youtube.com/watch?v=XCti72iChzg&list=PLsf-cGGUu4hE3T3dIxKc5zW8Nc89lVtIh
 */
const styles = `<style>:host { display: inline-block; width: 1rem; height: 1rem; }</style>`;
const template = document.createElement("template");
template.innerHTML = styles + `<slot />`;
class SpinningLogo extends HTMLImageElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.shadowRoot?.appendChild(template.content.cloneNode(true));
        this.animate([
            { transform: "scale(0) rotate(0deg)" },
            { transform: "scale(0.5) rotate(1080deg)" },
            { transform: "scale(0) rotate(2160deg)" },
        ], {
            duration: 5000,
            easing: "cubic-bezier(0.88, 0.02, 0.06, 1)",
            fill: "forwards",
            iterations: Infinity,
        });
    }
} //. SpinningLogo
window.customElements.define("spinning-logo", SpinningLogo, { extends: "img" });
export { SpinningLogo };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Bpbm5pbmdMb2dvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3Bpbm5pbmdMb2dvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBRUgsTUFBTSxNQUFNLEdBQUcsNEVBQTRFLENBQUM7QUFFNUYsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNwRCxRQUFRLENBQUMsU0FBUyxHQUFHLE1BQU0sR0FBRyxVQUFVLENBQUM7QUFFekMsTUFBTSxZQUFhLFNBQVEsZ0JBQWdCO0lBQ3ZDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGlCQUFpQjtRQUNiLElBQUksQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLE9BQU8sQ0FDUjtZQUNJLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFO1lBQ3RDLEVBQUUsU0FBUyxFQUFFLDRCQUE0QixFQUFFO1lBQzNDLEVBQUUsU0FBUyxFQUFFLDBCQUEwQixFQUFFO1NBQzVDLEVBQ0Q7WUFDSSxRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxtQ0FBbUM7WUFDM0MsSUFBSSxFQUFFLFVBQVU7WUFDaEIsVUFBVSxFQUFFLFFBQVE7U0FDdkIsQ0FDSixDQUFDO0lBQ04sQ0FBQztDQUNKLENBQUMsZ0JBQWdCO0FBRWxCLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUVoRixPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUMifQ==