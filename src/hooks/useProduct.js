import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { productService } from "../services/productService";
import api from "../api/api";

const PRODUCT_KEY = ['products']

export function useProductListing({ search = '', category = '', page = 1 } = {}) {
    return useQuery({
        queryKey: [...PRODUCT_KEY, search, category, page],
        queryFn: () => productService.search({ search, category, page: page - 1 }),
        staleTime: 1000 * 60 * 2 // 2mins
    })
}

export function useCreateProduct() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: productService.create,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: PRODUCT_KEY });
        },
        onError: () => null
    })
}

export function useUpdateProduct() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: productService.update,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: PRODUCT_KEY });
        },
        onError: () => null
    })
}

export function useDeleteProduct() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: productService.delete,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: PRODUCT_KEY })
        },
        onError: () => null
    });
}

