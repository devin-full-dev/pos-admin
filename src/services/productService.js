import api from "../api/api";

export const productService = {
    getAll: () => api.get("/api/products?size=1000&sort=name,asc"),
    create: async (data) => {
        api.post('/api/products', {
            name: data.name,
            category: data.category,
            price: Number(data.price ?? 0),
            cost: Number(data.cost ?? 0),
            stock: Number(data.stock ?? 0),
            image: data.image || null,
            status: data.status ?? 'active'
        })
    },
    update: async (data) => {
        const { id, ...body } = data;
        return api.put(`/api/products/${id}`, {
            name: body.name,
            category: body.category,
            price: Number(body.price),
            cost: Number(body.cost ?? 0),
            stock: Number(body.stock ?? 0),
            image: body.image || null,
            status: body.status ?? 'active'
        })
    },
    delete: async (id) => {
        await api.delete(`/api/products/${id}`)
        return id;
    },
    get: () => { },
    search: async ({ search = '', category = '', page = 0, size = 10 } = {}) => {
        const params = new URLSearchParams({ page, size, sort: 'name,asc' });
        if (search) {
            params.set('search', search);
        }
        if (category) params.set('category', category)
        const response = await api.get(`/api/products?${params}`); // Sample  => api/products?search=coca&category=all&page=0&size=10&sort=name%2Casc
        console.log("RESPONSE ----", response)
        if (response?.data !== undefined) {
            return response?.data
        }

        const content = Array.isArray(response) ? response : [];
        return {
            content,
            totalPages: 1,
            totalElement: content.length
        }
    },
}
