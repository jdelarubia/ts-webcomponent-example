import { AgeToCode } from "./AgeToCode";
import { MotivationPhrase } from "./MotivationPhrase";

window.customElements.define("age-to-code", AgeToCode, { extends: "input" });
window.customElements.define("motivation-phrase", MotivationPhrase, {
    extends: "p",
});
