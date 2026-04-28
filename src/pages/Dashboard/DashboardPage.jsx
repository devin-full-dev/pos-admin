import React, { useEffect, useState } from "react";

import RecentProduct from "../../components/ui/RecentProduct";
import StatCard from "../../components/ui/StatCard";
import { getProduct } from "../../api/mockApi";
import LowStock from "../../components/ui/LowStock";

export default function Dashboard({ collapsed }) {

    const [products, setProducts] = useState([]);

    console.log("Dashboard", collapsed)
    const statValues = [
        {
            label: "Revenue",
            value: 300,
            statValue: 10
        },
        {
            label: "Order",
            value: 2000,
            statValue: 12
        },
        {
            label: "Product",
            value: 1000,
            statValue: 6
        },
        {
            label: "Low Stock",
            value: 4,
            statValue: 2
        },
    ];

    useEffect(() => {
        getProduct.getAll().then(values => {
            setProducts(values)
        });
    }, [])

    return (
        <div className="page">
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                {statValues.map((value, ind) => {
                    return <StatCard
                        key={ind}
                        label={value.label}
                        value={value.value}
                        statValue={value.statValue}
                    />
                })}
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2 card">
                    <div className="card-header">
                        <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                            Recent Products
                        </h2>
                    </div>
                    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {products.map((value, ind) => {
                            return <RecentProduct key={ind} productTitle={value.name} price={value.price} img={value.image} />
                        })}
                    </div>
                </div>
                <LowStock />
            </div>
        </div>
    )
}
