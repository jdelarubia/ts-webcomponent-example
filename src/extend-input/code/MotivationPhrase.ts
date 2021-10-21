// Component default values
const _SILLYPHRASES: { [index: number]: string } = {
    0: "You're still a little young but hang in there!",
    7: "Lets start learning some basics...",
    18: "Ready to hack into your University?",
    25: "You can do this professionally now!",
    30: "Time to learn some GIT",
    32: "Up for Docker?",
    40: "Wanting some new challenge? Learn functional...",
    50: "You can bring a lot of your previous life into coding!",
    60: "You'll rank up quickly!",
    70: "You have some time in your hands. Get ready for your new life!",
    80: "It's never too late!",
};

// Component extension
class MotivationPhrase extends HTMLParagraphElement {
    constructor() {
        super();

        document.addEventListener("AgeChangeEvent", (evt: any) => {
            this.textContent = this.getPhrase(evt.detail.value);
        });
    } //.

    getPhrase(val: string): string {
        let lastIndex: number = 0;
        for (const age in _SILLYPHRASES) {
            if (parseInt(val) < parseInt(age)) {
                break;
            }
            lastIndex = parseInt(age);
        }
        return _SILLYPHRASES[lastIndex];
    } //.
} //. MotivationPhrase

export { MotivationPhrase };
