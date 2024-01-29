/**
 * fancy-text-block.ts
 * <fancy-text-block> paragraph component.
 */
class FancyTextBlock extends HTMLElement {
    // private shadow: ShadowRoot
    currentColorIndex = 0;
    availableColors = ['red', 'blue', 'green', 'yellow', 'black'];
    constructor() {
        super();
    }
    connectedCallback() {
        this.addEventListener('click', (event) => {
            const currentColor = this.availableColors[this.currentColorIndex];
            console.log(`text block color is now ${currentColor}`);
            this.style.color = this.availableColors[this.currentColorIndex];
            this.currentColorIndex++;
            if (this.currentColorIndex == this.availableColors.length) {
                this.currentColorIndex = 0;
            }
        });
    }
} //. FancyTextBlock
window.customElements.define('fancy-text-block', FancyTextBlock);
export { FancyTextBlock };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFuY3ktdGV4dC1ibG9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhbmN5LXRleHQtYmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsTUFBTSxjQUFlLFNBQVEsV0FBVztJQUN0Qyw2QkFBNkI7SUFDckIsaUJBQWlCLEdBQUcsQ0FBQyxDQUFBO0lBQ3JCLGVBQWUsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUVyRTtRQUNFLEtBQUssRUFBRSxDQUFBO0lBQ1QsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUM5QyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1lBRWpFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLFlBQVksRUFBRSxDQUFDLENBQUE7WUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtZQUMvRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtZQUN4QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUMxRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFBO1lBQzVCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLGtCQUFrQjtBQUVwQixNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLENBQUMsQ0FBQTtBQUVoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLENBQUEifQ==