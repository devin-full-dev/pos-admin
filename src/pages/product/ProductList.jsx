import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../data/products";
import { Filter, Pencil, Plus, Search, Trash2 } from "lucide-react";
import ProductImage from "../product/ProductImage";
import Pagination from '../../components/ui/Pagination';
import { CATEGORIES } from '../../constants/product';
import { productService } from "../../services/productService";

function ProductList() {

    const [categoryFilter, setCategoryFilter] = useState("All");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [data, setData] = useState();

    const handleCategoryFilter = (cat) => {
        setCategoryFilter(cat);
    }

    console.log("products =>>>", data)

    return (
        <div className="page">
            {/* Header */}
            <div className="page-header">
                <h1 className="page-title">
                    Products
                </h1>
                <button className="btn-primary">
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
                        value={""}
                        onChange={null}
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
                            {data}
                            <tr>
                                <td>
                                    <div className="flex items-center gap-2.5">
                                        <ProductImage
                                            src={null}
                                            name="Cocacola"
                                            className={"w-8 h-8 rounded-lg text-sm flex-shrink-0"}
                                        />
                                        <span className="font-medium text-gray-900 dark:text-gray-100">
                                            Cocacola
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge-blue">
                                        Drink
                                    </span>
                                </td>
                                <td className="font-semibold text-primary-600 dark:text-primary-400">
                                    $0.5
                                </td>
                                <td className="text-text-gray-500 dark:text-slate-400">
                                    $0.25
                                </td>
                                <td>
                                    Low: 2
                                </td>
                                <td>
                                    <span className="badge-green">
                                        Active
                                    </span>
                                </td>
                                <td>
                                    <div className="flex items-center justify-end gap-1">
                                        <button className="btn-ghost p-1.5 rounded-lg text-gray-400 hover:text-primary-600">
                                            <Pencil size={14} />
                                        </button>
                                        <button className="btn-ghost p-1.5 rounded-lg text-gray-400 hover:text-red-400">
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="px-3 py-3 border-t border-gray-50 dark:border-x-slate-800">
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default ProductList;
