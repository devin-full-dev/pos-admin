import React, { useEffect, useRef, useState } from "react";
import { useForm } from 'react-hook-form';
import { Upload, X } from "lucide-react";
import FormFields from '../../components/ui/FormFields'
import { CATEGORIES } from "../../constants/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../../schemas/productSchema";
import { useCreateProduct, useUpdateProduct } from "../../hooks/useProduct";

const DEFAULT_FIELDS_VALUE = {
    name: "",
    category: "",
    price: "",
    cost: "",
    stock: "",
    status: "active",
    image: ""
}

function ProductForm({ product, onClose }) {

    const isEditable = !!product;
    const [preview, setPreview] = useState(null);
    const fileRef = useRef();
    const createProduct = useCreateProduct();
    const updateProduct = useUpdateProduct();


    const {
        reset,
        setValue,
        register,
        formState: {
            errors,
            isSubmitting
        },
        handleSubmit,
    } = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: DEFAULT_FIELDS_VALUE
    });

    useEffect(() => {
        if (product) {
            reset({ ...product })
            setPreview(product.image || null)
        } else {
            reset(DEFAULT_FIELDS_VALUE)
            setPreview(null)
        }
    }, [product, reset]);

    const handleFileUpload = (e) => {
        const file = e.target.files?.[0];
        if (!file) return
        const reader = new FileReader();
        reader.onload = (ev) => {
            const dataURL = ev.target.result;
            setPreview(dataURL);
            setValue('image', dataURL);
        }
        reader.readAsDataURL(file);
    }

    const handleRemoveImage = () => {
        setPreview(null)
        setValue('image', '')
        if (fileRef.current) fileRef.current.value = '';
    }

    const onSubmit = async (data) => {
        if (isEditable) {
            console.log("VALUES", product, data)
            await updateProduct.mutateAsync({ ...product, ...data })
        } else {
            await createProduct.mutateAsync(data)
        }
        onClose();
    }

    return (
        <form
            className="space-y-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            {/* upload image */}
            <div>
                <label className="label">Product Image</label>
                <div
                    onClick={() => fileRef.current.click()}
                    className="
                        relative
                    rounded-xl
                    border-2
                    border-dashed border-gray-200 dark:border-x-slate-700 overflow-hidden
                        hover:border-primary-300 dark:hover:border-primary-700 transition-colors cursor-pointer">
                    {/* preview image*/}
                    {preview ? (
                        <div className="h-36 relative">
                            <img src={preview} alt="preview" className="w-full h-full object-cover" />
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveImage();
                                }}
                                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    ) : (
                        <div className="h-28 flex flex-col items-center justify-center gap-2 text-gray-400 dark:text-slate-500">
                            <Upload size={24} strokeWidth={1.5} />
                            <span className="text-xs font-medium">Click to upload</span>
                            <span className="text-xs text-gray-300 dark:text-slate-600">PNG, JPG, up to 5M</span>
                        </div>
                    )}
                </div>
                <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileUpload}
                />
            </div>

            <FormFields label={"Product Name"} error={errors?.name?.message} required={true}>
                <input {...register("name")} placeholder="e.g Cocacola" className="input" />
            </FormFields>

            <FormFields label={"Category"} error={errors?.category?.message} required>
                <select {...register("category")} className="input">
                    <option>Select category</option>
                    {CATEGORIES.map((val, idx) => (<option key={idx} value={val}>{val}</option>))}
                </select>
            </FormFields>

            <div className="grid grid-cols-2 gap-3">
                <FormFields label={"Price"} error={errors?.price?.message} required>
                    <input {...register("price")} type="number" step={0.01} className="input" placeholder="0.00" />
                </FormFields>
                <FormFields label={"Cost"} error={""} required>
                    <input {...register("cost")} type="number" step={0.01} className="input" placeholder="0.00" />
                </FormFields>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <FormFields label={"Stock"} error={errors?.stock?.message} required={true}>
                    <input {...register("stock")} type="number" className="input" placeholder="0" />
                </FormFields>
                <FormFields label={"Status"} error={errors?.status?.message} required={true}>
                    <select {...register("status")} className="input">
                        <option value={"active"}>Active</option>
                        <option value={"inactive"}>Inactive</option>
                    </select>
                </FormFields>
            </div>

            <div className="flex gap-3 pt-2">
                <button
                    onClick={onClose}
                    type="button"
                    className="btn-secondary flex-1"
                >
                    Cancel
                </button>
                <button type="submit" disabled={isSubmitting} className="btn-primary flex-1">
                    {isSubmitting ? 'Saving ...' : isEditable ? 'Save Change' : 'Add Product'}
                </button>
            </div>
        </form>
    );
}

export default ProductForm;
