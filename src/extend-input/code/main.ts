import { AgeToCode } from "./AgeToCode.js";
import { MotivationPhrase } from "./MotivationPhrase.js";

window.customElements.define("age-to-code", AgeToCode, { extends: "input" });
window.customElements.define("motivation-phrase", MotivationPhrase, {
    extends: "p",
});
