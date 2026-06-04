import React, { useEffect, useState } from "react";
import CartItems from "./CartItems";
import { ShoppingCart, X } from "lucide-react";
import ProductImage from '../product/ProductImage';
import { productService } from "../../services/productService";
import { CATEGORIES } from "../../constants/product"
import userCartStore from "../../store/useCartStore";
import ProductSkeleton from '../../components/ui/ProductSkeleton';

const POSPage = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const { addItems, getCount, getQtyItem } = userCartStore();

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = () => {
        setIsLoading(true);
        setError("");
        productService.getAll()
            .then(response => {
                setProducts(response.data.content)
            }).catch(err => {
                setError(err.message)
            }).finally(() => setIsLoading(false));
    }

    const handleOnSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleOnFilter = (val) => {
        setCategory(val);
    }

    const filteredProduct = products.filter(item => {
        const matchSearch = item.name.toLowerCase().includes(search.toLowerCase())
        const matchFilter = category.toLowerCase() === 'all' || item?.category.toLowerCase() === category.toLowerCase()
        return matchSearch && matchFilter;
    });

    return (
        <div className="flex h-[calc(100vh-64px)]">
            <div className="flex-1 flex-col overflow-hidden">
                {/* Search Products */}
                <div className="px-4 pt-4 pb-4 space-y-3 border-b border-gray-100 dark:border-gray-800">
                    <input
                        className="input"
                        placeholder="Search products .."
                        value={search}
                        onChange={(e) => handleOnSearch(e)}
                    />
                    <div className="flex gap-2 overflow-x-auto pb-3">
                        {CATEGORIES.map((cat, ind) => {
                            return (
                                <button
                                    key={ind}
                                    className={`
                                    flex-shrink-0 text-xs px-3 py-1.5
                                    rounded-full border transition-all
                                    ${category.toLowerCase() === cat.toLowerCase() ?
                                            'bg-primary-600 text-white border-primary-600' :
                                            'border-gray-100 dark:border-slate-800 text-gray-600 dark:text-gray-400 hover:border-primary-200'
                                        }
                                   `}
                                    onClick={() => handleOnFilter(cat)}
                                >
                                    {cat}
                                </button>
                            )

                        })}

                    </div>
                </div>

                {/* Product Grid (list) */}
                <div className="flex-1 overflow-auto p-4">
                    {isLoading && filteredProduct.length == 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                            {Array.from({ length: 12 }).map((val, ind) => (

                                <ProductSkeleton />

                            ))}
                        </div>
                    )}
                    <div className="grid grid-cols-2 md:gird-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {filteredProduct.map((product, ind) => {
                            return (
                                <button
                                    key={ind}
                                    className="relative card p-4 text-left transition-all active:scale-95"
                                    onClick={() => addItems(product)}
                                >
                                    <div className="absolute top-2 right-2 w-5 h-5 bg-primary-500 text-white text-xs rounded-full flex items-center justify-center">{getQtyItem(product.id)}</div>
                                    <ProductImage
                                        src={product?.image}
                                        name={product.name}
                                        className="mx-auto w-20 h-20 rounded-xl mb-3"
                                    />
                                    <p className="text-xs font-medium text-gray-800 dark:text-gray-200 leading-tight mb-1">
                                        {product.name}
                                    </p>
                                    <p className="text-sm font-bold text-primary-600 dark:text-primary-400">
                                        {`$${product.price.toFixed(2)}`}
                                    </p>
                                    {product.stock <= 10 && product.stock != 0 && (
                                        <p className="text-xs text-amber-400 mt-0.5">
                                            {`Only ${product.stock} Left`}
                                        </p>
                                    )}
                                    {product.stock == 0 && (
                                        <p className="text-xs text-red-400 mt-0.5">
                                            Out of stock
                                        </p>
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Checkout Form Items */}
            <div className="w-80 flex flex-col bg-white dark:bg-slate-900 border-gray-100 dark:border-slate-800">
                <div className="px-4 py-4 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <ShoppingCart size={18} className="text-gray-700 dark:text-gray-300" />
                        <span className="font-semibold text-gray-700 dark-text-gray-100">Cart</span>
                        <span className="badge-blue">{getCount()}</span>
                    </div>
                    <button className="btn-ghost p-1 text-gray-400 hover:text-red-600">
                        <X size={16} />
                    </button>
                </div>
                <CartItems />
            </div>
        </div >
    )
}

export default POSPage;
