import React from "react";

import RecentProduct from "../../components/ui/RecentProduct";
import StatCard from "../../components/ui/StatCard";

export default function Dashboard() {
    return (
        <div className="page">
            <StatCard />
            <RecentProduct />
        </div>
    )
}
