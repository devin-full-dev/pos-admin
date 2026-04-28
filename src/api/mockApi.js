import { PRODUCTS } from "../data/products";

const delay = (ms = 800) => new Promise(r => setTimeout(r, ms));

export const getProduct = {
    getAll: async () => {
        await delay()
        return [...PRODUCTS];
    }
}
