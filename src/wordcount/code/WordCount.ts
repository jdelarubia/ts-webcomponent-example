const REFRESH = 1000;

class WordCount extends HTMLParagraphElement {
    constructor() {
        super();
        const attrs = <NamedNodeMap>this.attributes;
        const counterId = attrs.getNamedItem("data-counterid")?.nodeValue || "";
        const counterElem = <HTMLDivElement>document.getElementById(counterId);

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
    update(text: string): number {
        return text.trim().toLocaleLowerCase().split(" ").length;
    } //.
} //. WordCount

export { WordCount };
