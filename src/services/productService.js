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
    search: async ({ search = '', filter = '', page = 0, size = 10 }) => {
        const params = new URLSearchParams({ page, size, sort: 'name,asc' })
        if (search) params.set('search', search)
        if (filter && filter.toLowerCase() !== "all") params.set('category', filter)

        const res = await api.get(`/api/products?${params}`)

        // res = full axios response, data is in res.data
        const data = res.data
        if (data && data.content) return data
        return { content: [], totalPages: 1, totalElements: 0 }
    },
}
