import { ProductCard } from "./ProductCard";

const menu = {
    hamburger: {
        "1/4": 30,
        "1/2": 40,
    },
    vegetables: {},
    cokes: {
        full: 2,
        "sugar-free": 2,
    },
    alcoholic: {
        vodka: 20,
        gin: 20,
        whisky: 20,
    },
};

const main = document.querySelector("main");

for (let cat in menu) {
    console.log(cat);
    const node = <HTMLElement>document.createElement("product-card");
    node.setAttribute("name", cat);
    main?.appendChild(node);
}
