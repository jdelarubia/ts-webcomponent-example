const REFRESH = 1000;
class WordCount extends HTMLParagraphElement {
    constructor() {
        super();
        const attrs = this.attributes;
        const counterId = attrs.getNamedItem("data-counterid")?.nodeValue || "";
        const counterElem = document.getElementById(counterId);
        setInterval(() => {
            const text = this.textContent || "";
            counterElem.textContent = this.update(text).toString();
        }, REFRESH);
    } //.
    /**
     * Given some text, return the number of words in that text.
     * @param text
     * @return number
     */
    update(text) {
        return text.trim().toLocaleLowerCase().split(" ").length;
    } //.
} //. WordCount
export { WordCount };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29yZENvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiV29yZENvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQztBQUVyQixNQUFNLFNBQVUsU0FBUSxvQkFBb0I7SUFDeEM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sS0FBSyxHQUFpQixJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzVDLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxTQUFTLElBQUksRUFBRSxDQUFDO1FBQ3hFLE1BQU0sV0FBVyxHQUFtQixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXZFLFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFDYixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztZQUNwQyxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0QsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQyxHQUFHO0lBRUw7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxJQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzdELENBQUMsQ0FBQyxHQUFHO0NBQ1IsQ0FBQyxhQUFhO0FBRWYsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDIn0=