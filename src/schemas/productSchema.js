import { z } from 'zod';
import { int, number } from 'zod/v4-mini';

export const productSchema = z.object({
    name: z.string().min(2, "Product name must be at least 2 characters"),
    category: z.string().min(1, "Please select at least one"),
    price: z.coerce.number().positive("Price must be a positive number"),
    cost: z.coerce.number().min(0, "Cost can not be negative"),
    stock: z.coerce.number().int().min(0, "Stock can not be negative"),
    status: z.enum(['active', 'inactive']),
    image: z.string().optional(),
}).refine(data => data.cost < data?.price, {
    message: 'Cost must be less than the selling price',
    path: ['cost']
})
