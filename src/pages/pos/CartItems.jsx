import React from "react";
import { Minus, Plus, Trash2 } from 'lucide-react'
import userCartStore from "../../store/useCartStore";

const CartItems = () => {

    const {
        items,
        increaseItem,
        decreaseItem,
        removeItem,
        getTotal
    } = userCartStore();

    return (
        <div className="flex-1 overflow-auto divide-y divide-gray-50 dark:divide-slate-800 justify-center">
            {items.map((item, ind) => {
                return (
                    <div
                        className="px-4 py-3 flex items-center gap-3"
                        key={ind}
                    >
                        <div className="w-9 h-9 rounded-lg text-sm flex-shrink-0 bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-400 dark:text-slate-500 font-semibold text-[0.6rem] uppercase">
                            C
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-gray-800 dark:text-gray-200 truncate">
                                {item.name}
                            </p>
                            <p className="text-xs text-primary-600 dark:text-primary-400 font-semibold">{`$${item.price}`}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => decreaseItem(item.id)}
                                className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover-slate-700 transition-colors">
                                <Minus size={10} />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                                onClick={() => increaseItem(item.id)}
                                className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover-slate-700 transition-colors">
                                <Plus size={10} />
                            </button>
                            <button
                                onClick={() => removeItem(item.id)}
                                className="ml-1 text-gray-500 dark:text-slate-600 hover:text-red-500 transition-colors"
                            >
                                <Trash2 size={15} />
                            </button>
                        </div>
                    </div>
                )
            })}

            {/* Checkout */}
            <div className="p-4 py-5 border-t border-gray-100 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Total</span>
                    <span
                        className="tex-lg font-bold text-gray-900dark:text-gray-100"
                    >
                        {`$ ${getTotal().toFixed(2)}`}
                    </span>
                </div>
                <button
                    disabled={items.length == 0}
                    className="btn-primary w-full"
                >Checkout</button>
            </div>
        </div >
    )
}

export default CartItems;
