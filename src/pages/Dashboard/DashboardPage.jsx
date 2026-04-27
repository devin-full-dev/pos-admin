import React from "react";

import RecentProduct from "../../components/ui/RecentProduct";
import StatCard from "../../components/ui/StatCard";

export default function Dashboard({ collapsed }) {
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
            <RecentProduct />
        </div>
    )
}
