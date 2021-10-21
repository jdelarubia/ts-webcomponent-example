// Component default values
const _SILLYPHRASES = {
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
        document.addEventListener("AgeChangeEvent", (evt) => {
            this.textContent = this.getPhrase(evt.detail.value);
        });
    } //.
    getPhrase(val) {
        let lastIndex = 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW90aXZhdGlvblBocmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1vdGl2YXRpb25QaHJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCO0FBQzNCLE1BQU0sYUFBYSxHQUFnQztJQUMvQyxDQUFDLEVBQUUsZ0RBQWdEO0lBQ25ELENBQUMsRUFBRSxvQ0FBb0M7SUFDdkMsRUFBRSxFQUFFLHFDQUFxQztJQUN6QyxFQUFFLEVBQUUscUNBQXFDO0lBQ3pDLEVBQUUsRUFBRSx3QkFBd0I7SUFDNUIsRUFBRSxFQUFFLGdCQUFnQjtJQUNwQixFQUFFLEVBQUUsaURBQWlEO0lBQ3JELEVBQUUsRUFBRSx3REFBd0Q7SUFDNUQsRUFBRSxFQUFFLHlCQUF5QjtJQUM3QixFQUFFLEVBQUUsZ0VBQWdFO0lBQ3BFLEVBQUUsRUFBRSxzQkFBc0I7Q0FDN0IsQ0FBQztBQUVGLHNCQUFzQjtBQUN0QixNQUFNLGdCQUFpQixTQUFRLG9CQUFvQjtJQUMvQztRQUNJLEtBQUssRUFBRSxDQUFDO1FBRVIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsR0FBRztJQUVMLFNBQVMsQ0FBQyxHQUFXO1FBQ2pCLElBQUksU0FBUyxHQUFXLENBQUMsQ0FBQztRQUMxQixLQUFLLE1BQU0sR0FBRyxJQUFJLGFBQWEsRUFBRTtZQUM3QixJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLE1BQU07YUFDVDtZQUNELFNBQVMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFDRCxPQUFPLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsR0FBRztDQUNSLENBQUMsb0JBQW9CO0FBRXRCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxDQUFDIn0=