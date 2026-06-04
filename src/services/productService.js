import api from "../api/api";

export const productService = {
    getAll: () => api.get("/api/products?size=1000&sort=name,asc"),
    search: () => { },
    create: () => { },
    update: () => { },
    delete: () => { },
    get: () => { }
}
