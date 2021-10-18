// Component default values
const _VALUE = 0;
const _MIN = 0;
const _MAX = 100;

// Custom event function
const triggerAgeChangeEvent = (elem: HTMLInputElement) => {
    const ageChangeEvent = new CustomEvent("AgeChangeEvent", {
        bubbles: true,
        detail: { value: elem.value },
    });
    elem.dispatchEvent(ageChangeEvent);
}; //.

// Component-extension
class AgeToCode extends HTMLInputElement {
    constructor() {
        super();

        this.value = this.getAttribute("value") ?? _VALUE.toString();
        this.min = this.getAttribute("min") ?? _MIN.toString();
        this.max = this.getAttribute("max") ?? _MAX.toString();

        this.addEventListener("change", (evt: Event) => {
            triggerAgeChangeEvent(this);
        });
    } //.
} //. AgeToCode

export { AgeToCode };
