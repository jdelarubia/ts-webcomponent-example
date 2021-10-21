class WordCount extends HTMLParagraphElement {
    constructor() {
        super();
        const attrs = this.attributes;
        const counterId = attrs.getNamedItem("data-counterid")?.nodeValue || "";
        const counterElem = document.getElementById(counterId);
        setInterval(() => {
            const text = this.textContent || "";
            counterElem.textContent = this.update(text).toString();
        }, 1000);
    } //.
    /**
     * Given some text, return the number of words in that text
     * @param text
     * @return number
     */
    update(text) {
        return text.trim().toLocaleLowerCase().split(" ").length;
    } //.
} //. WordCount
export { WordCount };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29yZENvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiV29yZENvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sU0FBVSxTQUFRLG9CQUFvQjtJQUN4QztRQUNJLEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxLQUFLLEdBQWlCLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDNUMsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDeEUsTUFBTSxXQUFXLEdBQW1CLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdkUsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUNiLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO1lBQ3BDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzRCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDLENBQUMsR0FBRztJQUVMOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsSUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM3RCxDQUFDLENBQUMsR0FBRztDQUNSLENBQUMsYUFBYTtBQUVmLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyJ9