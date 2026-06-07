import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../data/products";
import { Filter, Pencil, Plus, Search, Trash2 } from "lucide-react";
import ProductImage from "../product/ProductImage";
import Pagination from '../../components/ui/Pagination';
import { CATEGORIES } from '../../constants/product';
import { useDeleteProduct, useProductListing } from '../../hooks/useProduct';
import ProductForm from './ProductForm'
import Modal from "../../components/ui/Modal";
import ConfirmModal from "../../components/ui/ConfirmModal";

function ProductList() {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [modal, setModal] = useState({ open: false, product: null });

    const [deleteId, setDeleteId] = useState(null);
    const deleteProduct = useDeleteProduct();

    const { data, isLoading } = useProductListing({ search, category: categoryFilter, page });
    const list = data?.content ?? [];
    const totalPages = data?.totalPages ?? 1;

    const handleCategoryFilter = (cat) => {
        setCategoryFilter(cat);
        setPage(1);
    }

    const handleSearch = (value) => {
        setSearch(value);
        setPage(1);
    }

    const openEdit = useCallback((val) => {
        setModal({ open: true, product: val })
    }, []);

    const handleOpenModal = useCallback(() => {
        setModal({ open: true, product: null })
    }, [])

    const handleCloseModal = useCallback(() => {
        setModal({ open: false, product: null })
    }, [])

    const stockBadge = (stock) => {
        if (stock == 0) return <span className="badge-red">OUT of Stock !</span>
        if (stock <= 6) return <span className="badge-amber">Low: {stock}</span>
        return <span className="badge-green">{stock}</span>
    }

    console.log("dďfadafasfsa", deleteId, !!deleteId)

    return (
        <div className="page">
            {/* Header */}
            <div className="page-header">
                <h1 className="page-title">
                    Products
                </h1>
                <button
                    className="btn-primary"
                    onClick={handleOpenModal}
                >
                    <Plus size={16} /> Add Product
                </button>
            </div>

            {/* Filter Product */}
            <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        className="input pl-8 w-56"
                        placeholder="Search Products ..."
                        value={search}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                    <Filter size={14} className="text-gray-400" />
                    {["All", ...CATEGORIES].map((cat, idn) => {
                        return (
                            <button
                                key={idn}
                                onClick={() => handleCategoryFilter(cat)}
                                className={`
                                    text-xs px-3 py-1.5 rounded-full border transition-all
                                    ${categoryFilter.toLowerCase() === cat.toLowerCase() ?
                                        "bg-primary-600 text-white border-primary-600" :
                                        "border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-400 hover:border-primary-300"
                                    }
                                    `}
                            >
                                {cat || ""}

                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Datatable */}
            <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="tbl">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Cost</th>
                                <th>Stock</th>
                                <th>Status</th>
                                <th className="text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="flex items-center gap-2.5">
                                                <ProductImage
                                                    src={item?.image}
                                                    name={item.name}
                                                    className={"w-8 h-8 rounded-lg text-sm flex-shrink-0"}
                                                />
                                                <span className="font-medium text-gray-900 dark:text-gray-100">
                                                    {item.name}
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge-blue">
                                                {item?.category}
                                            </span>
                                        </td>
                                        <td className="font-semibold text-primary-600 dark:text-primary-400">
                                            ${item?.price.toFixed(2)}
                                        </td>
                                        <td className="text-text-gray-500 dark:text-slate-400">
                                            ${item?.cost.toFixed(2)}
                                        </td>
                                        <td>
                                            {stockBadge(item?.stock)}
                                        </td>
                                        <td>
                                            <span className={`${item?.status === 'active' ? 'badge-green' : 'badge-gray'}`}>
                                                {item?.status.toUpperCase()}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="flex items-center justify-end gap-1">
                                                <button
                                                    onClick={() => openEdit(item)}
                                                    className="btn-ghost p-1.5 rounded-lg text-gray-400 hover:text-primary-600"
                                                >
                                                    <Pencil size={14} /> Edit
                                                </button>
                                                <button
                                                    onClick={() => setDeleteId(item?.id)}
                                                    className="btn-ghost p-1.5 rounded-lg text-gray-400 hover:text-red-400"
                                                >
                                                    <Trash2 size={14} /> Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="px-3 py-3 border-t border-gray-50 dark:border-x-slate-800">
                    <Pagination
                        page={page}
                        totalPages={totalPages}
                        onGoTo={setPage}
                    />
                </div>
            </div>
            <Modal
                open={modal.open}
                onClose={handleCloseModal}
                title={modal.product ? 'Edit Product' : 'Add Product'}
            >
                <ProductForm product={modal.product} onClose={handleCloseModal} />
            </Modal>

            <ConfirmModal
                open={!!deleteId}
                onClose={() => setDeleteId(null)}
                onConfirm={() => {
                    deleteProduct.mutate(deleteId);
                    setDeleteId(null)
                }}
                title="Delete Product"
                message="Are you sure want to delete this product? This can not be undone!"
                loading={deleteProduct.isPending}
            />

        </div>
    )
}

export default ProductList;
