import { create } from 'zustand'

const userCartStore = create((set, get) => ({
    items: [],
    addItems: (product) => set((state) => {
        const isExist = state.items.some(val => val.id == product.id)
        if (isExist) {
            return {
                items: state.items.map((val => val.id == product.id ? { ...val, quantity: val.quantity + 1 } : val))
            }
        }
        return { items: [...state.items, { ...product, quantity: 1 }] }
    }),
    removeItem: (id) => set((state) => ({
        items: state.items.filter((val) => val.id != id)
    })),
    clearCart: () => set({ items: [] }),
    getCount: (id) => get().items.reduce((sum, item) => sum + item.quantity, 0),
    getTotal: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),

    increaseItem: (id) => set((state) => ({
        items: state.items.map((val) => val.id == id ? { ...val, quantity: val.quantity + 1 } : val)
    })),

    decreaseItem: (id) => set((state) => ({
        items: state.items.map((val) => val.id == id ? { ...val, quantity: val.quantity - 1 } : val)?.filter(i => i.quantity > 0)
    })),

    removeItem: (id) => set((state) => ({
        items: state.items.filter(val => val.id != id)
    })),

    getQtyItem: (id) => {
        const item = get().items.find(val => val.id == id);
        return item ? item.quantity : 0;
    }
}));

export default userCartStore;
